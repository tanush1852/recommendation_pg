import json
import spotipy
from spotipy.oauth2 import SpotifyClientCredentials
from utils import parameters, recommender
import re

# Set up connection to Spotify API
sp = spotipy.Spotify(auth_manager=SpotifyClientCredentials(client_id=parameters.SPOTIFY_CLIENT_ID, client_secret=parameters.SPOTIFY_CLIENT_SECRET))

def save_recommendations_to_json(recommendations_list, filename='./src/recommendations.json'):
    with open(filename, 'w') as json_file:
        json.dump(recommendations_list, json_file, indent=4)
    print(f'Recommendations saved to {filename}')

def get_track_details(track_id, recommendations, index):
    track = sp.track(track_id)
    artists = ', '.join([artist['name'] for artist in track['artists']])
    album = track['album']['name']
    year = track['album']['release_date'][:4]
    link = 'https://open.spotify.com/track/' + re.search('.+:(.+)', track['uri']).group(1)
    image_url = track['album']['images'][0]['url']  # Fetch the image URL from the first image in the album
    return {
        'Track': track['name'],
        'Artist': artists,
        'Album': album,
        'Year': year,
        'Link': link,
        'Image': image_url
    }

def get_audio_features(id):
    features = sp.audio_features(id)[0]
    return {
        'Danceability': features['danceability'],
        'Energy': features['energy'],
        'Speechiness': features['speechiness'],
        'Acousticness': features['acousticness'],
        'Instrumentalness': features['instrumentalness'],
        'Liveness': features['liveness'],
        'Valence': features['valence'],
        'Tempo': features['tempo']
    }

def main():
    # Example usage
    track_ids = ["3yfqSUWxFvZELEM4PmlwIR","1E9Akcf9sVfVl2hUqKYvoP","1pvM16DmM0Qg2qi0kfJeYs"]  # Example Spotify track ID
    features_list = []

    # Get audio features for the input track
    for track_id in track_ids:
        features = get_audio_features(track_id)
        features_list.append(features)
    
    # Load the original track list DataFrame
    tracks_list_original = recommender.get_tracks_list_original()
    
    # Get recommendations
    recommendations = recommender.get_recommendation(features_list, num_recommendations=10)
    
    # Fetch track details including image URL from Spotify
    recommendations_list = []
    for index, track_id in enumerate(recommendations[0]):
        track_details = get_track_details(track_id, recommendations, index)  # Pass index to get_track_details
        recommendations_list.append(track_details)
    
    # Save recommendations to JSON
    save_recommendations_to_json(recommendations_list)

if __name__ == "__main__":
    main()
