export const LaunchSuccessFilter = 
"https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true"
export const LaunchAndLandFilter =
"https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true"
export const AllFilter =
"https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=2014"

export const FILTER_API = "https://api.spaceXdata.com/v3/launches?limit=100"



export const card = {
	"flight_number": 2,
	"mission_name": "DemoSat",
	"mission_id": [],
	"launch_year": "2007",
	"launch_date_unix": 1174439400,
	"launch_date_utc": "2007-03-21T01:10:00.000Z",
	"launch_date_local": "2007-03-21T13:10:00+12:00",
	"is_tentative": false,
	"tentative_max_precision": "hour",
	"tbd": false,
	"launch_window": 0,
	"rocket": {
		"rocket_id": "falcon1",
		"rocket_name": "Falcon 1",
		"rocket_type": "Merlin A",
		"first_stage": {
			"cores": [{
				"core_serial": "Merlin2A",
				"flight": 1,
				"block": null,
				"gridfins": false,
				"legs": false,
				"reused": false,
				"land_success": null,
				"landing_intent": false,
				"landing_type": null,
				"landing_vehicle": null
			}]
		},
		"second_stage": {
			"block": 1,
			"payloads": [{
				"payload_id": "DemoSAT",
				"norad_id": [],
				"reused": false,
				"customers": ["DARPA"],
				"nationality": "United States",
				"manufacturer": "SpaceX",
				"payload_type": "Satellite",
				"payload_mass_kg": null,
				"payload_mass_lbs": null,
				"orbit": "LEO",
				"orbit_params": {
					"reference_system": "geocentric",
					"regime": "low-earth",
					"longitude": null,
					"semi_major_axis_km": null,
					"eccentricity": null,
					"periapsis_km": null,
					"apoapsis_km": null,
					"inclination_deg": null,
					"period_min": null,
					"lifespan_years": null,
					"epoch": null,
					"mean_motion": null,
					"raan": null,
					"arg_of_pericenter": null,
					"mean_anomaly": null
				}
			}]
		},
		"fairings": {
			"reused": false,
			"recovery_attempt": false,
			"recovered": false,
			"ship": null
		}
	},
	"ships": [],
	"telemetry": {
		"flight_club": null
	},
	"launch_site": {
		"site_id": "kwajalein_atoll",
		"site_name": "Kwajalein Atoll",
		"site_name_long": "Kwajalein Atoll Omelek Island"
	},
	"launch_success": false,
	"launch_failure_details": {
		"time": 301,
		"altitude": 289,
		"reason": "harmonic oscillation leading to premature engine shutdown"
	},
	"links": {
		"mission_patch": "https://images2.imgbox.com/be/e7/iNqsqVYM_o.png",
		"mission_patch_small": "https://images2.imgbox.com/4f/e3/I0lkuJ2e_o.png",
		"reddit_campaign": null,
		"reddit_launch": null,
		"reddit_recovery": null,
		"reddit_media": null,
		"presskit": null,
		"article_link": "https://www.space.com/3590-spacex-falcon-1-rocket-fails-reach-orbit.html",
		"wikipedia": "https://en.wikipedia.org/wiki/DemoSat",
		"video_link": "https://www.youtube.com/watch?v=Lk4zQ2wP-Nc",
		"youtube_id": "Lk4zQ2wP-Nc",
		"flickr_images": []
	},
	"details": "Successful first stage burn and transition to second stage, maximum altitude 289 km, Premature engine shutdown at T+7 min 30 s, Failed to reach orbit, Failed to recover first stage",
	"upcoming": false,
	"static_fire_date_utc": null,
	"static_fire_date_unix": null,
	"timeline": {
		"webcast_liftoff": 60
	},
	"crew": null
}

export const cards = [card, card, card, card, card, card, card, card, card]