#!/usr/bin/env python

import json
import urllib2
import argparse
import os

def event_is_accepted(event):
    return event["status"] == "confirmed" and "location" in event

def parse_address(location):
    return " ".join(location["address_lines"]) \
        + ", " + location["locality"] \
        + ", " + location["region"] \
        + " " + location["postal_code"]

def parse_event(event):
    return {
        "description": event["description"],
        "title": event["title"],
        "url": event["browser_url"],
        "address": parse_address(event["location"]),
        "place": event["location"]["venue"],
        "start": event["start_date"],
        "coordinates": {
            "latitude": event["location"]["location"]["latitude"],
            "longitude": event["location"]["location"]["longitude"]
        },
    }

parser = argparse.ArgumentParser(description="Sync events from Action Network")
parser.add_argument("--token")
parser.add_argument("--dest")
args = parser.parse_args()
dir = os.path.dirname(args.dest)
if not os.path.exists(dir):
    os.makedirs(dir)

url = "https://actionnetwork.org/api/v2/events"
headers = {
    "OSDI-API-Token": args.token
}

request = urllib2.Request(url, None, headers)
response = urllib2.urlopen(request)
data = json.load(response)
events = data.get("_embedded", {}).get("osdi:events", [])

parsed_events = [parse_event(e) for e in events if event_is_accepted(e)]

with open(args.dest, 'w') as f:
    json.dump(parsed_events, f, indent=2)