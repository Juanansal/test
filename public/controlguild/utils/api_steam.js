{
	"apilist": {
		"interfaces": [
			{
				"name": "ICSGOServers_730",
				"methods": [
					{
						"name": "GetGameServersStatus",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [

						]
						
					}
				]
				
			},
			{
				"name": "ICSGOTournaments_730",
				"methods": [
					{
						"name": "GetTournamentFantasyLineup",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [
							{
								"name": "event",
								"type": "uint32",
								"optional": false,
								"description": "The event ID"
							},
							{
								"name": "steamid",
								"type": "uint64",
								"optional": false,
								"description": "The SteamID of the user inventory"
							},
							{
								"name": "steamidkey",
								"type": "string",
								"optional": false,
								"description": "Authentication obtained from the SteamID"
							}
						]
						
					},
					{
						"name": "GetTournamentItems",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [
							{
								"name": "event",
								"type": "uint32",
								"optional": false,
								"description": "The event ID"
							},
							{
								"name": "steamid",
								"type": "uint64",
								"optional": false,
								"description": "The SteamID of the user inventory"
							},
							{
								"name": "steamidkey",
								"type": "string",
								"optional": false,
								"description": "Authentication obtained from the SteamID"
							}
						]
						
					},
					{
						"name": "GetTournamentLayout",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [
							{
								"name": "event",
								"type": "uint32",
								"optional": false,
								"description": "The event ID"
							}
						]
						
					},
					{
						"name": "GetTournamentPredictions",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [
							{
								"name": "event",
								"type": "uint32",
								"optional": false,
								"description": "The event ID"
							},
							{
								"name": "steamid",
								"type": "uint64",
								"optional": false,
								"description": "The SteamID of the user inventory"
							},
							{
								"name": "steamidkey",
								"type": "string",
								"optional": false,
								"description": "Authentication obtained from the SteamID"
							}
						]
						
					},
					{
						"name": "UploadTournamentFantasyLineup",
						"version": 1,
						"httpmethod": "POST",
						"parameters": [
							{
								"name": "event",
								"type": "uint32",
								"optional": false,
								"description": "The event ID"
							},
							{
								"name": "steamid",
								"type": "uint64",
								"optional": false,
								"description": "The SteamID of the user inventory"
							},
							{
								"name": "steamidkey",
								"type": "string",
								"optional": false,
								"description": "Authentication obtained from the SteamID"
							},
							{
								"name": "sectionid",
								"type": "uint32",
								"optional": false,
								"description": "Event section id"
							},
							{
								"name": "pickid0",
								"type": "uint32",
								"optional": false,
								"description": "PickID to select for the slot"
							},
							{
								"name": "itemid0",
								"type": "uint64",
								"optional": false,
								"description": "ItemID to lock in for the pick"
							},
							{
								"name": "pickid1",
								"type": "uint32",
								"optional": false,
								"description": "PickID to select for the slot"
							},
							{
								"name": "itemid1",
								"type": "uint64",
								"optional": false,
								"description": "ItemID to lock in for the pick"
							},
							{
								"name": "pickid2",
								"type": "uint32",
								"optional": false,
								"description": "PickID to select for the slot"
							},
							{
								"name": "itemid2",
								"type": "uint64",
								"optional": false,
								"description": "ItemID to lock in for the pick"
							},
							{
								"name": "pickid3",
								"type": "uint32",
								"optional": false,
								"description": "PickID to select for the slot"
							},
							{
								"name": "itemid3",
								"type": "uint64",
								"optional": false,
								"description": "ItemID to lock in for the pick"
							},
							{
								"name": "pickid4",
								"type": "uint32",
								"optional": false,
								"description": "PickID to select for the slot"
							},
							{
								"name": "itemid4",
								"type": "uint64",
								"optional": false,
								"description": "ItemID to lock in for the pick"
							}
						]
						
					},
					{
						"name": "UploadTournamentPredictions",
						"version": 1,
						"httpmethod": "POST",
						"parameters": [
							{
								"name": "event",
								"type": "uint32",
								"optional": false,
								"description": "The event ID"
							},
							{
								"name": "steamid",
								"type": "uint64",
								"optional": false,
								"description": "The SteamID of the user inventory"
							},
							{
								"name": "steamidkey",
								"type": "string",
								"optional": false,
								"description": "Authentication obtained from the SteamID"
							},
							{
								"name": "sectionid",
								"type": "uint32",
								"optional": false,
								"description": "Event section id"
							},
							{
								"name": "groupid",
								"type": "uint32",
								"optional": false,
								"description": "Event group id"
							},
							{
								"name": "index",
								"type": "uint32",
								"optional": false,
								"description": "Index in group"
							},
							{
								"name": "pickid",
								"type": "uint32",
								"optional": false,
								"description": "Pick ID to select"
							},
							{
								"name": "itemid",
								"type": "uint64",
								"optional": false,
								"description": "ItemID to lock in for the pick"
							}
						]
						
					}
				]
				
			},
			{
				"name": "IDOTA2Fantasy_205790",
				"methods": [
					{
						"name": "GetFantasyPlayerStats",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [
							{
								"name": "FantasyLeagueID",
								"type": "uint32",
								"optional": false,
								"description": "The fantasy league ID"
							},
							{
								"name": "StartTime",
								"type": "uint32",
								"optional": true,
								"description": "An optional filter for minimum timestamp"
							},
							{
								"name": "EndTime",
								"type": "uint32",
								"optional": true,
								"description": "An optional filter for maximum timestamp"
							},
							{
								"name": "matchid",
								"type": "uint64",
								"optional": true,
								"description": "An optional filter for a specific match"
							},
							{
								"name": "SeriesID",
								"type": "uint32",
								"optional": true,
								"description": "An optional filter for a specific series"
							},
							{
								"name": "PlayerAccountID",
								"type": "uint32",
								"optional": true,
								"description": "An optional filter for a specific player"
							}
						]
						
					},
					{
						"name": "GetPlayerOfficialInfo",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [
							{
								"name": "accountid",
								"type": "uint32",
								"optional": false,
								"description": "The account ID to look up"
							}
						]
						
					},
					{
						"name": "GetProPlayerList",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [

						]
						
					}
				]
				
			},
			{
				"name": "IDOTA2Fantasy_570",
				"methods": [
					{
						"name": "GetFantasyPlayerStats",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [
							{
								"name": "FantasyLeagueID",
								"type": "uint32",
								"optional": false,
								"description": "The fantasy league ID"
							},
							{
								"name": "StartTime",
								"type": "uint32",
								"optional": true,
								"description": "An optional filter for minimum timestamp"
							},
							{
								"name": "EndTime",
								"type": "uint32",
								"optional": true,
								"description": "An optional filter for maximum timestamp"
							},
							{
								"name": "matchid",
								"type": "uint64",
								"optional": true,
								"description": "An optional filter for a specific match"
							},
							{
								"name": "SeriesID",
								"type": "uint32",
								"optional": true,
								"description": "An optional filter for a specific series"
							},
							{
								"name": "PlayerAccountID",
								"type": "uint32",
								"optional": true,
								"description": "An optional filter for a specific player"
							}
						]
						
					},
					{
						"name": "GetPlayerOfficialInfo",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [
							{
								"name": "accountid",
								"type": "uint32",
								"optional": false,
								"description": "The account ID to look up"
							}
						]
						
					},
					{
						"name": "GetProPlayerList",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [

						]
						
					}
				]
				
			},
			{
				"name": "IDOTA2MatchStats_205790",
				"methods": [
					{
						"name": "GetRealtimeStats",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [
							{
								"name": "server_steam_id",
								"type": "uint64",
								"optional": false,
								"description": ""
							}
						]
						
					}
				]
				
			},
			{
				"name": "IDOTA2MatchStats_570",
				"methods": [
					{
						"name": "GetRealtimeStats",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [
							{
								"name": "server_steam_id",
								"type": "uint64",
								"optional": false,
								"description": ""
							}
						]
						
					}
				]
				
			},
			{
				"name": "IDOTA2Match_205790",
				"methods": [
					{
						"name": "GetLeagueListing",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [

						]
						
					},
					{
						"name": "GetLiveLeagueGames",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [
							{
								"name": "league_id",
								"type": "uint32",
								"optional": true,
								"description": "Only show matches of the specified league id"
							},
							{
								"name": "match_id",
								"type": "uint64",
								"optional": true,
								"description": "Only show matches of the specified match id"
							}
						]
						
					},
					{
						"name": "GetMatchDetails",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [
							{
								"name": "match_id",
								"type": "uint64",
								"optional": false,
								"description": "Match id"
							}
						]
						
					},
					{
						"name": "GetMatchHistory",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [
							{
								"name": "hero_id",
								"type": "uint32",
								"optional": true,
								"description": "The ID of the hero that must be in the matches being queried"
							},
							{
								"name": "game_mode",
								"type": "uint32",
								"optional": true,
								"description": "Which game mode to return matches for"
							},
							{
								"name": "skill",
								"type": "uint32",
								"optional": true,
								"description": "The average skill range of the match, these can be [1-3] with lower numbers being lower skill. Ignored if an account ID is specified"
							},
							{
								"name": "min_players",
								"type": "string",
								"optional": true,
								"description": "Minimum number of human players that must be in a match for it to be returned"
							},
							{
								"name": "account_id",
								"type": "string",
								"optional": true,
								"description": "An account ID to get matches from. This will fail if the user has their match history hidden"
							},
							{
								"name": "league_id",
								"type": "string",
								"optional": true,
								"description": "The league ID to return games from"
							},
							{
								"name": "start_at_match_id",
								"type": "uint64",
								"optional": true,
								"description": "The minimum match ID to start from"
							},
							{
								"name": "matches_requested",
								"type": "string",
								"optional": true,
								"description": "The number of requested matches to return"
							},
							{
								"name": "tournament_games_only",
								"type": "string",
								"optional": true,
								"description": "Whether or not tournament games should only be returned"
							}
						]
						
					},
					{
						"name": "GetMatchHistoryBySequenceNum",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [
							{
								"name": "start_at_match_seq_num",
								"type": "uint64",
								"optional": true,
								"description": ""
							},
							{
								"name": "matches_requested",
								"type": "uint32",
								"optional": true,
								"description": ""
							}
						]
						
					},
					{
						"name": "GetScheduledLeagueGames",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [
							{
								"name": "date_min",
								"type": "uint32",
								"optional": true,
								"description": "The starting time stamp to collect scheduled games from. If ignored, it will use the current time"
							},
							{
								"name": "date_max",
								"type": "uint32",
								"optional": true,
								"description": "The ending time stamp. If this is more than 7 days past the starting time stamp, it will be clamped to 7 days."
							}
						]
						
					},
					{
						"name": "GetTeamInfoByTeamID",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [
							{
								"name": "start_at_team_id",
								"type": "uint64",
								"optional": true,
								"description": ""
							},
							{
								"name": "teams_requested",
								"type": "uint32",
								"optional": true,
								"description": ""
							}
						]
						
					},
					{
						"name": "GetTopLiveGame",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [
							{
								"name": "partner",
								"type": "int32",
								"optional": false,
								"description": "Which partner's games to use."
							}
						]
						
					},
					{
						"name": "GetTournamentPlayerStats",
						"version": 2,
						"httpmethod": "GET",
						"parameters": [
							{
								"name": "account_id",
								"type": "string",
								"optional": false,
								"description": ""
							},
							{
								"name": "league_id",
								"type": "string",
								"optional": true,
								"description": ""
							},
							{
								"name": "hero_id",
								"type": "string",
								"optional": true,
								"description": ""
							},
							{
								"name": "time_frame",
								"type": "string",
								"optional": true,
								"description": ""
							},
							{
								"name": "match_id",
								"type": "uint64",
								"optional": true,
								"description": ""
							},
							{
								"name": "phase_id",
								"type": "uint32",
								"optional": true,
								"description": ""
							}
						]
						
					}
				]
				
			},
			{
				"name": "IDOTA2Match_570",
				"methods": [
					{
						"name": "GetLeagueListing",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [

						]
						
					},
					{
						"name": "GetLiveLeagueGames",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [
							{
								"name": "league_id",
								"type": "uint32",
								"optional": true,
								"description": "Only show matches of the specified league id"
							},
							{
								"name": "match_id",
								"type": "uint64",
								"optional": true,
								"description": "Only show matches of the specified match id"
							}
						]
						
					},
					{
						"name": "GetMatchDetails",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [
							{
								"name": "match_id",
								"type": "uint64",
								"optional": false,
								"description": "Match id"
							}
						]
						
					},
					{
						"name": "GetMatchHistory",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [
							{
								"name": "hero_id",
								"type": "uint32",
								"optional": true,
								"description": "The ID of the hero that must be in the matches being queried"
							},
							{
								"name": "game_mode",
								"type": "uint32",
								"optional": true,
								"description": "Which game mode to return matches for"
							},
							{
								"name": "skill",
								"type": "uint32",
								"optional": true,
								"description": "The average skill range of the match, these can be [1-3] with lower numbers being lower skill. Ignored if an account ID is specified"
							},
							{
								"name": "min_players",
								"type": "string",
								"optional": true,
								"description": "Minimum number of human players that must be in a match for it to be returned"
							},
							{
								"name": "account_id",
								"type": "string",
								"optional": true,
								"description": "An account ID to get matches from. This will fail if the user has their match history hidden"
							},
							{
								"name": "league_id",
								"type": "string",
								"optional": true,
								"description": "The league ID to return games from"
							},
							{
								"name": "start_at_match_id",
								"type": "uint64",
								"optional": true,
								"description": "The minimum match ID to start from"
							},
							{
								"name": "matches_requested",
								"type": "string",
								"optional": true,
								"description": "The number of requested matches to return"
							},
							{
								"name": "tournament_games_only",
								"type": "string",
								"optional": true,
								"description": "Whether or not tournament games should only be returned"
							}
						]
						
					},
					{
						"name": "GetMatchHistoryBySequenceNum",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [
							{
								"name": "start_at_match_seq_num",
								"type": "uint64",
								"optional": true,
								"description": ""
							},
							{
								"name": "matches_requested",
								"type": "uint32",
								"optional": true,
								"description": ""
							}
						]
						
					},
					{
						"name": "GetScheduledLeagueGames",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [
							{
								"name": "date_min",
								"type": "uint32",
								"optional": true,
								"description": "The starting time stamp to collect scheduled games from. If ignored, it will use the current time"
							},
							{
								"name": "date_max",
								"type": "uint32",
								"optional": true,
								"description": "The ending time stamp. If this is more than 7 days past the starting time stamp, it will be clamped to 7 days."
							}
						]
						
					},
					{
						"name": "GetTeamInfoByTeamID",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [
							{
								"name": "start_at_team_id",
								"type": "uint64",
								"optional": true,
								"description": ""
							},
							{
								"name": "teams_requested",
								"type": "uint32",
								"optional": true,
								"description": ""
							}
						]
						
					},
					{
						"name": "GetTopLiveGame",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [
							{
								"name": "partner",
								"type": "int32",
								"optional": false,
								"description": "Which partner's games to use."
							}
						]
						
					},
					{
						"name": "GetTournamentPlayerStats",
						"version": 2,
						"httpmethod": "GET",
						"parameters": [
							{
								"name": "account_id",
								"type": "string",
								"optional": false,
								"description": ""
							},
							{
								"name": "league_id",
								"type": "string",
								"optional": true,
								"description": ""
							},
							{
								"name": "hero_id",
								"type": "string",
								"optional": true,
								"description": ""
							},
							{
								"name": "time_frame",
								"type": "string",
								"optional": true,
								"description": ""
							},
							{
								"name": "match_id",
								"type": "uint64",
								"optional": true,
								"description": ""
							},
							{
								"name": "phase_id",
								"type": "uint32",
								"optional": true,
								"description": ""
							}
						]
						
					}
				]
				
			},
			{
				"name": "IDOTA2StreamSystem_205790",
				"methods": [
					{
						"name": "GetBroadcasterInfo",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [
							{
								"name": "broadcaster_steam_id",
								"type": "uint64",
								"optional": false,
								"description": "64-bit Steam ID of the broadcaster"
							},
							{
								"name": "league_id",
								"type": "uint32",
								"optional": true,
								"description": "LeagueID to use if we aren't in a lobby"
							}
						]
						
					}
				]
				
			},
			{
				"name": "IDOTA2StreamSystem_570",
				"methods": [
					{
						"name": "GetBroadcasterInfo",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [
							{
								"name": "broadcaster_steam_id",
								"type": "uint64",
								"optional": false,
								"description": "64-bit Steam ID of the broadcaster"
							},
							{
								"name": "league_id",
								"type": "uint32",
								"optional": true,
								"description": "LeagueID to use if we aren't in a lobby"
							}
						]
						
					}
				]
				
			},
			{
				"name": "IDOTA2Teams_205790",
				"methods": [
					{
						"name": "GetTeamInfo",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [
							{
								"name": "team_id",
								"type": "uint32",
								"optional": true,
								"description": "Team ID that you're requesting info about"
							},
							{
								"name": "league_id",
								"type": "uint32",
								"optional": true,
								"description": "League ID for which you're requesting all regisered teams info"
							}
						]
						
					}
				]
				
			},
			{
				"name": "IDOTA2Teams_570",
				"methods": [
					{
						"name": "GetTeamInfo",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [
							{
								"name": "team_id",
								"type": "uint32",
								"optional": true,
								"description": "Team ID that you're requesting info about"
							},
							{
								"name": "league_id",
								"type": "uint32",
								"optional": true,
								"description": "League ID for which you're requesting all regisered teams info"
							}
						]
						
					}
				]
				
			},
			{
				"name": "IDOTA2Ticket_205790",
				"methods": [
					{
						"name": "SetSteamAccountPurchased",
						"version": 1,
						"httpmethod": "POST",
						"parameters": [
							{
								"name": "eventid",
								"type": "uint32",
								"optional": false,
								"description": "Event ID"
							},
							{
								"name": "steamid",
								"type": "uint64",
								"optional": false,
								"description": "The 64-bit Steam ID"
							}
						]
						
					},
					{
						"name": "SteamAccountValidForEvent",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [
							{
								"name": "eventid",
								"type": "uint32",
								"optional": false,
								"description": "Event ID"
							},
							{
								"name": "steamid",
								"type": "uint64",
								"optional": false,
								"description": "The 64-bit Steam ID"
							}
						]
						
					}
				]
				
			},
			{
				"name": "IDOTA2Ticket_570",
				"methods": [
					{
						"name": "ClaimBadgeReward",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [
							{
								"name": "eventid",
								"type": "uint32",
								"optional": false,
								"description": "Event ID"
							},
							{
								"name": "BadgeID",
								"type": "string",
								"optional": false,
								"description": "The badge ID"
							}
						]
						
					},
					{
						"name": "GetSteamIDForBadgeID",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [
							{
								"name": "BadgeID",
								"type": "string",
								"optional": false,
								"description": "The badge ID"
							}
						]
						
					},
					{
						"name": "SetSteamAccountPurchased",
						"version": 1,
						"httpmethod": "POST",
						"parameters": [
							{
								"name": "eventid",
								"type": "uint32",
								"optional": false,
								"description": "Event ID"
							},
							{
								"name": "steamid",
								"type": "uint64",
								"optional": false,
								"description": "The 64-bit Steam ID"
							}
						]
						
					},
					{
						"name": "SteamAccountValidForEvent",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [
							{
								"name": "eventid",
								"type": "uint32",
								"optional": false,
								"description": "Event ID"
							},
							{
								"name": "steamid",
								"type": "uint64",
								"optional": false,
								"description": "The 64-bit Steam ID"
							}
						]
						
					}
				]
				
			},
			{
				"name": "IEconDOTA2_205790",
				"methods": [
					{
						"name": "GetEventStatsForAccount",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [
							{
								"name": "eventid",
								"type": "uint32",
								"optional": false,
								"description": "The League ID of the compendium you're looking for."
							},
							{
								"name": "accountid",
								"type": "uint32",
								"optional": false,
								"description": "The account ID to look up."
							},
							{
								"name": "language",
								"type": "string",
								"optional": true,
								"description": "The language to provide hero names in."
							}
						]
						
					},
					{
						"name": "GetGameItems",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [
							{
								"name": "language",
								"type": "string",
								"optional": true,
								"description": "The language to provide item names in."
							}
						]
						
					},
					{
						"name": "GetHeroes",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [
							{
								"name": "language",
								"type": "string",
								"optional": true,
								"description": "The language to provide hero names in."
							},
							{
								"name": "itemizedonly",
								"type": "bool",
								"optional": true,
								"description": "Return a list of itemized heroes only."
							}
						]
						
					},
					{
						"name": "GetItemIconPath",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [
							{
								"name": "iconname",
								"type": "string",
								"optional": false,
								"description": "The item icon name to get the CDN path of"
							},
							{
								"name": "icontype",
								"type": "uint32",
								"optional": true,
								"description": "The type of image you want. 0 = normal, 1 = large, 2 = ingame"
							}
						]
						
					},
					{
						"name": "GetRarities",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [
							{
								"name": "language",
								"type": "string",
								"optional": true,
								"description": "The language to provide rarity names in."
							}
						]
						
					},
					{
						"name": "GetTournamentPrizePool",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [
							{
								"name": "leagueid",
								"type": "uint32",
								"optional": true,
								"description": "The ID of the league to get the prize pool of"
							}
						]
						
					}
				]
				
			},
			{
				"name": "IEconDOTA2_570",
				"methods": [
					{
						"name": "GetEventStatsForAccount",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [
							{
								"name": "eventid",
								"type": "uint32",
								"optional": false,
								"description": "The League ID of the compendium you're looking for."
							},
							{
								"name": "accountid",
								"type": "uint32",
								"optional": false,
								"description": "The account ID to look up."
							},
							{
								"name": "language",
								"type": "string",
								"optional": true,
								"description": "The language to provide hero names in."
							}
						]
						
					},
					{
						"name": "GetGameItems",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [
							{
								"name": "language",
								"type": "string",
								"optional": true,
								"description": "The language to provide item names in."
							}
						]
						
					},
					{
						"name": "GetHeroes",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [
							{
								"name": "language",
								"type": "string",
								"optional": true,
								"description": "The language to provide hero names in."
							},
							{
								"name": "itemizedonly",
								"type": "bool",
								"optional": true,
								"description": "Return a list of itemized heroes only."
							}
						]
						
					},
					{
						"name": "GetItemIconPath",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [
							{
								"name": "iconname",
								"type": "string",
								"optional": false,
								"description": "The item icon name to get the CDN path of"
							},
							{
								"name": "icontype",
								"type": "uint32",
								"optional": true,
								"description": "The type of image you want. 0 = normal, 1 = large, 2 = ingame"
							}
						]
						
					},
					{
						"name": "GetRarities",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [
							{
								"name": "language",
								"type": "string",
								"optional": true,
								"description": "The language to provide rarity names in."
							}
						]
						
					},
					{
						"name": "GetTournamentPrizePool",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [
							{
								"name": "leagueid",
								"type": "uint32",
								"optional": true,
								"description": "The ID of the league to get the prize pool of"
							}
						]
						
					}
				]
				
			},
			{
				"name": "IEconItems_205790",
				"methods": [
					{
						"name": "GetPlayerItems",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [
							{
								"name": "steamid",
								"type": "uint64",
								"optional": false,
								"description": "The Steam ID to fetch items for"
							}
						]
						
					},
					{
						"name": "GetSchema",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [
							{
								"name": "language",
								"type": "string",
								"optional": true,
								"description": "The language to return the names in. Defaults to returning string keys."
							}
						]
						
					},
					{
						"name": "GetSchemaURL",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [

						]
						
					},
					{
						"name": "GetStoreMetaData",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [
							{
								"name": "language",
								"type": "string",
								"optional": true,
								"description": "The language to results in."
							}
						]
						
					}
				]
				
			},
			{
				"name": "IEconItems_218620",
				"methods": [
					{
						"name": "GetPlayerItems",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [
							{
								"name": "steamid",
								"type": "uint64",
								"optional": false,
								"description": "The Steam ID to fetch items for"
							}
						]
						
					}
				]
				
			},
			{
				"name": "IEconItems_221540",
				"methods": [
					{
						"name": "GetPlayerItems",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [
							{
								"name": "steamid",
								"type": "uint64",
								"optional": false,
								"description": "The Steam ID to fetch items for"
							}
						]
						
					}
				]
				
			},
			{
				"name": "IEconItems_238460",
				"methods": [
					{
						"name": "GetPlayerItems",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [
							{
								"name": "steamid",
								"type": "uint64",
								"optional": false,
								"description": "The Steam ID to fetch items for"
							}
						]
						
					}
				]
				
			},
			{
				"name": "IEconItems_440",
				"methods": [
					{
						"name": "GetPlayerItems",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [
							{
								"name": "steamid",
								"type": "uint64",
								"optional": false,
								"description": "The Steam ID to fetch items for"
							}
						]
						
					},
					{
						"name": "GetSchema",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [
							{
								"name": "language",
								"type": "string",
								"optional": true,
								"description": "The language to return the names in. Defaults to returning string keys."
							}
						]
						
					},
					{
						"name": "GetSchemaURL",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [

						]
						
					},
					{
						"name": "GetStoreMetaData",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [
							{
								"name": "language",
								"type": "string",
								"optional": true,
								"description": "The language to results in."
							}
						]
						
					},
					{
						"name": "GetStoreStatus",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [

						]
						
					}
				]
				
			},
			{
				"name": "IEconItems_570",
				"methods": [
					{
						"name": "GetEquippedPlayerItems",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [
							{
								"name": "steamid",
								"type": "uint64",
								"optional": false,
								"description": "The Steam ID to fetch items for"
							},
							{
								"name": "class_id",
								"type": "uint32",
								"optional": false,
								"description": "Return items equipped for this class id"
							}
						]
						
					},
					{
						"name": "GetPlayerItems",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [
							{
								"name": "steamid",
								"type": "uint64",
								"optional": false,
								"description": "The Steam ID to fetch items for"
							}
						]
						
					},
					{
						"name": "GetSchema",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [
							{
								"name": "language",
								"type": "string",
								"optional": true,
								"description": "The language to return the names in. Defaults to returning string keys."
							}
						]
						
					},
					{
						"name": "GetSchemaURL",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [

						]
						
					},
					{
						"name": "GetStoreMetaData",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [
							{
								"name": "language",
								"type": "string",
								"optional": true,
								"description": "The language to results in."
							}
						]
						
					}
				]
				
			},
			{
				"name": "IEconItems_620",
				"methods": [
					{
						"name": "GetPlayerItems",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [
							{
								"name": "steamid",
								"type": "uint64",
								"optional": false,
								"description": "The Steam ID to fetch items for"
							}
						]
						
					},
					{
						"name": "GetSchema",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [
							{
								"name": "language",
								"type": "string",
								"optional": true,
								"description": "The language to return the names in. Defaults to returning string keys."
							}
						]
						
					}
				]
				
			},
			{
				"name": "IEconItems_730",
				"methods": [
					{
						"name": "GetPlayerItems",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [
							{
								"name": "steamid",
								"type": "uint64",
								"optional": false,
								"description": "The Steam ID to fetch items for"
							}
						]
						
					},
					{
						"name": "GetSchema",
						"version": 2,
						"httpmethod": "GET",
						"parameters": [
							{
								"name": "language",
								"type": "string",
								"optional": true,
								"description": "The language to return the names in. Defaults to returning string keys."
							}
						]
						
					},
					{
						"name": "GetSchemaURL",
						"version": 2,
						"httpmethod": "GET",
						"parameters": [

						]
						
					},
					{
						"name": "GetStoreMetaData",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [
							{
								"name": "language",
								"type": "string",
								"optional": true,
								"description": "The language to results in."
							}
						]
						
					}
				]
				
			},
			{
				"name": "IGCVersion_205790",
				"methods": [
					{
						"name": "GetClientVersion",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [

						]
						
					},
					{
						"name": "GetServerVersion",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [

						]
						
					}
				]
				
			},
			{
				"name": "IGCVersion_440",
				"methods": [
					{
						"name": "GetClientVersion",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [

						]
						
					},
					{
						"name": "GetServerVersion",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [

						]
						
					}
				]
				
			},
			{
				"name": "IGCVersion_570",
				"methods": [
					{
						"name": "GetClientVersion",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [

						]
						
					},
					{
						"name": "GetServerVersion",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [

						]
						
					}
				]
				
			},
			{
				"name": "IGCVersion_730",
				"methods": [
					{
						"name": "GetServerVersion",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [

						]
						
					}
				]
				
			},
			{
				"name": "IPortal2Leaderboards_620",
				"methods": [
					{
						"name": "GetBucketizedData",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [
							{
								"name": "leaderboardName",
								"type": "string",
								"optional": false,
								"description": "The leaderboard name to fetch data for."
							}
						]
						
					}
				]
				
			},
			{
				"name": "ISteamApps",
				"methods": [
					{
						"name": "GetAppList",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [

						]
						
					},
					{
						"name": "GetAppList",
						"version": 2,
						"httpmethod": "GET",
						"parameters": [

						]
						
					},
					{
						"name": "GetServersAtAddress",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [
							{
								"name": "addr",
								"type": "string",
								"optional": false,
								"description": "IP or IP:queryport to list"
							}
						]
						
					},
					{
						"name": "UpToDateCheck",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [
							{
								"name": "appid",
								"type": "uint32",
								"optional": false,
								"description": "AppID of game"
							},
							{
								"name": "version",
								"type": "uint32",
								"optional": false,
								"description": "The installed version of the game"
							}
						]
						
					}
				]
				
			},
			{
				"name": "ISteamBitPay",
				"methods": [
					{
						"name": "BitPayPaymentNotification",
						"version": 1,
						"httpmethod": "POST",
						"parameters": [

						]
						
					}
				]
				
			},
			{
				"name": "ISteamCDN",
				"methods": [
					{
						"name": "SetClientFilters",
						"version": 1,
						"httpmethod": "POST",
						"parameters": [
							{
								"name": "key",
								"type": "string",
								"optional": false,
								"description": "access key"
							},
							{
								"name": "cdnname",
								"type": "string",
								"optional": false,
								"description": "Steam name of CDN property"
							},
							{
								"name": "allowedipblocks",
								"type": "string",
								"optional": true,
								"description": "comma-separated list of allowed IP address blocks in CIDR format - blank for not used"
							},
							{
								"name": "allowedasns",
								"type": "string",
								"optional": true,
								"description": "comma-separated list of allowed client network AS numbers - blank for not used"
							},
							{
								"name": "allowedipcountries",
								"type": "string",
								"optional": true,
								"description": "comma-separated list of allowed client IP country codes in ISO 3166-1 format - blank for not used"
							}
						]
						
					},
					{
						"name": "SetPerformanceStats",
						"version": 1,
						"httpmethod": "POST",
						"parameters": [
							{
								"name": "key",
								"type": "string",
								"optional": false,
								"description": "access key"
							},
							{
								"name": "cdnname",
								"type": "string",
								"optional": false,
								"description": "Steam name of CDN property"
							},
							{
								"name": "mbps_sent",
								"type": "uint32",
								"optional": true,
								"description": "Outgoing network traffic in Mbps"
							},
							{
								"name": "mbps_recv",
								"type": "uint32",
								"optional": true,
								"description": "Incoming network traffic in Mbps"
							},
							{
								"name": "cpu_percent",
								"type": "uint32",
								"optional": true,
								"description": "Percent CPU load"
							},
							{
								"name": "cache_hit_percent",
								"type": "uint32",
								"optional": true,
								"description": "Percent cache hits"
							}
						]
						
					}
				]
				
			},
			{
				"name": "ISteamDirectory",
				"methods": [
					{
						"name": "GetCMList",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [
							{
								"name": "cellid",
								"type": "uint32",
								"optional": false,
								"description": "Client's Steam cell ID"
							},
							{
								"name": "maxcount",
								"type": "uint32",
								"optional": true,
								"description": "Max number of servers to return"
							}
						]
						
					}
				]
				
			},
			{
				"name": "ISteamEconomy",
				"methods": [
					{
						"name": "GetAssetClassInfo",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [
							{
								"name": "appid",
								"type": "uint32",
								"optional": false,
								"description": "Must be a steam economy app."
							},
							{
								"name": "language",
								"type": "string",
								"optional": true,
								"description": "The user's local language"
							},
							{
								"name": "class_count",
								"type": "uint32",
								"optional": false,
								"description": "Number of classes requested. Must be at least one."
							},
							{
								"name": "classid0",
								"type": "uint64",
								"optional": false,
								"description": "Class ID of the nth class."
							},
							{
								"name": "instanceid0",
								"type": "uint64",
								"optional": true,
								"description": "Instance ID of the nth class."
							}
						]
						
					},
					{
						"name": "GetAssetPrices",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [
							{
								"name": "appid",
								"type": "uint32",
								"optional": false,
								"description": "Must be a steam economy app."
							},
							{
								"name": "currency",
								"type": "string",
								"optional": true,
								"description": "The currency to filter for"
							},
							{
								"name": "language",
								"type": "string",
								"optional": true,
								"description": "The user's local language"
							}
						]
						
					}
				]
				
			},
			{
				"name": "ISteamEnvoy",
				"methods": [
					{
						"name": "PaymentOutNotification",
						"version": 1,
						"httpmethod": "POST",
						"parameters": [

						]
						
					},
					{
						"name": "PaymentOutReversalNotification",
						"version": 1,
						"httpmethod": "POST",
						"parameters": [

						]
						
					}
				]
				
			},
			{
				"name": "ISteamNews",
				"methods": [
					{
						"name": "GetNewsForApp",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [
							{
								"name": "appid",
								"type": "uint32",
								"optional": false,
								"description": "AppID to retrieve news for"
							},
							{
								"name": "maxlength",
								"type": "uint32",
								"optional": true,
								"description": "Maximum length for the content to return, if this is 0 the full content is returned, if it's less then a blurb is generated to fit."
							},
							{
								"name": "enddate",
								"type": "uint32",
								"optional": true,
								"description": "Retrieve posts earlier than this date (unix epoch timestamp)"
							},
							{
								"name": "count",
								"type": "uint32",
								"optional": true,
								"description": "# of posts to retrieve (default 20)"
							}
						]
						
					},
					{
						"name": "GetNewsForApp",
						"version": 2,
						"httpmethod": "GET",
						"parameters": [
							{
								"name": "appid",
								"type": "uint32",
								"optional": false,
								"description": "AppID to retrieve news for"
							},
							{
								"name": "maxlength",
								"type": "uint32",
								"optional": true,
								"description": "Maximum length for the content to return, if this is 0 the full content is returned, if it's less then a blurb is generated to fit."
							},
							{
								"name": "enddate",
								"type": "uint32",
								"optional": true,
								"description": "Retrieve posts earlier than this date (unix epoch timestamp)"
							},
							{
								"name": "count",
								"type": "uint32",
								"optional": true,
								"description": "# of posts to retrieve (default 20)"
							},
							{
								"name": "feeds",
								"type": "string",
								"optional": true,
								"description": "Comma-seperated list of feed names to return news for"
							}
						]
						
					}
				]
				
			},
			{
				"name": "ISteamPayPalPaymentsHub",
				"methods": [
					{
						"name": "PayPalPaymentsHubPaymentNotification",
						"version": 1,
						"httpmethod": "POST",
						"parameters": [

						]
						
					}
				]
				
			},
			{
				"name": "ISteamRemoteStorage",
				"methods": [
					{
						"name": "GetCollectionDetails",
						"version": 1,
						"httpmethod": "POST",
						"parameters": [
							{
								"name": "collectioncount",
								"type": "uint32",
								"optional": false,
								"description": "Number of collections being requested"
							},
							{
								"name": "publishedfileids[0]",
								"type": "uint64",
								"optional": false,
								"description": "collection ids to get the details for"
							}
						]
						
					},
					{
						"name": "GetPublishedFileDetails",
						"version": 1,
						"httpmethod": "POST",
						"parameters": [
							{
								"name": "itemcount",
								"type": "uint32",
								"optional": false,
								"description": "Number of items being requested"
							},
							{
								"name": "publishedfileids[0]",
								"type": "uint64",
								"optional": false,
								"description": "published file id to look up"
							}
						]
						
					},
					{
						"name": "GetUGCFileDetails",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [
							{
								"name": "steamid",
								"type": "uint64",
								"optional": true,
								"description": "If specified, only returns details if the file is owned by the SteamID specified"
							},
							{
								"name": "ugcid",
								"type": "uint64",
								"optional": false,
								"description": "ID of UGC file to get info for"
							},
							{
								"name": "appid",
								"type": "uint32",
								"optional": false,
								"description": "appID of product"
							}
						]
						
					}
				]
				
			},
			{
				"name": "ISteamUser",
				"methods": [
					{
						"name": "GetFriendList",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [
							{
								"name": "key",
								"type": "string",
								"optional": false,
								"description": "access key"
							},
							{
								"name": "steamid",
								"type": "uint64",
								"optional": false,
								"description": "SteamID of user"
							},
							{
								"name": "relationship",
								"type": "string",
								"optional": true,
								"description": "relationship type (ex: friend)"
							}
						]
						
					},
					{
						"name": "GetPlayerBans",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [
							{
								"name": "key",
								"type": "string",
								"optional": false,
								"description": "access key"
							},
							{
								"name": "steamids",
								"type": "string",
								"optional": false,
								"description": "Comma-delimited list of SteamIDs"
							}
						]
						
					},
					{
						"name": "GetPlayerSummaries",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [
							{
								"name": "key",
								"type": "string",
								"optional": false,
								"description": "access key"
							},
							{
								"name": "steamids",
								"type": "string",
								"optional": false,
								"description": "Comma-delimited list of SteamIDs"
							}
						]
						
					},
					{
						"name": "GetPlayerSummaries",
						"version": 2,
						"httpmethod": "GET",
						"parameters": [
							{
								"name": "key",
								"type": "string",
								"optional": false,
								"description": "access key"
							},
							{
								"name": "steamids",
								"type": "string",
								"optional": false,
								"description": "Comma-delimited list of SteamIDs (max: 100)"
							}
						]
						
					},
					{
						"name": "GetUserGroupList",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [
							{
								"name": "key",
								"type": "string",
								"optional": false,
								"description": "access key"
							},
							{
								"name": "steamid",
								"type": "uint64",
								"optional": false,
								"description": "SteamID of user"
							}
						]
						
					},
					{
						"name": "ResolveVanityURL",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [
							{
								"name": "key",
								"type": "string",
								"optional": false,
								"description": "access key"
							},
							{
								"name": "vanityurl",
								"type": "string",
								"optional": false,
								"description": "The vanity URL to get a SteamID for"
							},
							{
								"name": "url_type",
								"type": "int32",
								"optional": true,
								"description": "The type of vanity URL. 1 (default): Individual profile, 2: Group, 3: Official game group"
							}
						]
						
					}
				]
				
			},
			{
				"name": "ISteamUserAuth",
				"methods": [
					{
						"name": "AuthenticateUser",
						"version": 1,
						"httpmethod": "POST",
						"parameters": [
							{
								"name": "steamid",
								"type": "uint64",
								"optional": false,
								"description": "Should be the users steamid, unencrypted."
							},
							{
								"name": "sessionkey",
								"type": "rawbinary",
								"optional": false,
								"description": "Should be a 32 byte random blob of data, which is then encrypted with RSA using the Steam system's public key.  Randomness is important here for security."
							},
							{
								"name": "encrypted_loginkey",
								"type": "rawbinary",
								"optional": false,
								"description": "Should be the users hashed loginkey, AES encrypted with the sessionkey."
							}
						]
						
					},
					{
						"name": "AuthenticateUserTicket",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [
							{
								"name": "key",
								"type": "string",
								"optional": false,
								"description": "access key"
							},
							{
								"name": "appid",
								"type": "uint32",
								"optional": false,
								"description": "appid of game"
							},
							{
								"name": "ticket",
								"type": "string",
								"optional": false,
								"description": "Ticket from GetAuthSessionTicket."
							}
						]
						
					}
				]
				
			},
			{
				"name": "ISteamUserOAuth",
				"methods": [
					{
						"name": "GetTokenDetails",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [
							{
								"name": "access_token",
								"type": "string",
								"optional": false,
								"description": "OAuth2 token for which to return details"
							}
						]
						
					}
				]
				
			},
			{
				"name": "ISteamUserStats",
				"methods": [
					{
						"name": "GetGlobalAchievementPercentagesForApp",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [
							{
								"name": "gameid",
								"type": "uint64",
								"optional": false,
								"description": "GameID to retrieve the achievement percentages for"
							}
						]
						
					},
					{
						"name": "GetGlobalAchievementPercentagesForApp",
						"version": 2,
						"httpmethod": "GET",
						"parameters": [
							{
								"name": "gameid",
								"type": "uint64",
								"optional": false,
								"description": "GameID to retrieve the achievement percentages for"
							}
						]
						
					},
					{
						"name": "GetGlobalStatsForGame",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [
							{
								"name": "appid",
								"type": "uint32",
								"optional": false,
								"description": "AppID that we're getting global stats for"
							},
							{
								"name": "count",
								"type": "uint32",
								"optional": false,
								"description": "Number of stats get data for"
							},
							{
								"name": "name[0]",
								"type": "string",
								"optional": false,
								"description": "Names of stat to get data for"
							},
							{
								"name": "startdate",
								"type": "uint32",
								"optional": true,
								"description": "Start date for daily totals (unix epoch timestamp)"
							},
							{
								"name": "enddate",
								"type": "uint32",
								"optional": true,
								"description": "End date for daily totals (unix epoch timestamp)"
							}
						]
						
					},
					{
						"name": "GetNumberOfCurrentPlayers",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [
							{
								"name": "appid",
								"type": "uint32",
								"optional": false,
								"description": "AppID that we're getting user count for"
							}
						]
						
					},
					{
						"name": "GetPlayerAchievements",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [
							{
								"name": "key",
								"type": "string",
								"optional": false,
								"description": "access key"
							},
							{
								"name": "steamid",
								"type": "uint64",
								"optional": false,
								"description": "SteamID of user"
							},
							{
								"name": "appid",
								"type": "uint32",
								"optional": false,
								"description": "AppID to get achievements for"
							},
							{
								"name": "l",
								"type": "string",
								"optional": true,
								"description": "Language to return strings for"
							}
						]
						
					},
					{
						"name": "GetSchemaForGame",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [
							{
								"name": "key",
								"type": "string",
								"optional": false,
								"description": "access key"
							},
							{
								"name": "appid",
								"type": "uint32",
								"optional": false,
								"description": "appid of game"
							},
							{
								"name": "l",
								"type": "string",
								"optional": true,
								"description": "localized langauge to return (english, french, etc.)"
							}
						]
						
					},
					{
						"name": "GetSchemaForGame",
						"version": 2,
						"httpmethod": "GET",
						"parameters": [
							{
								"name": "key",
								"type": "string",
								"optional": false,
								"description": "access key"
							},
							{
								"name": "appid",
								"type": "uint32",
								"optional": false,
								"description": "appid of game"
							},
							{
								"name": "l",
								"type": "string",
								"optional": true,
								"description": "localized language to return (english, french, etc.)"
							}
						]
						
					},
					{
						"name": "GetUserStatsForGame",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [
							{
								"name": "key",
								"type": "string",
								"optional": false,
								"description": "access key"
							},
							{
								"name": "steamid",
								"type": "uint64",
								"optional": false,
								"description": "SteamID of user"
							},
							{
								"name": "appid",
								"type": "uint32",
								"optional": false,
								"description": "appid of game"
							}
						]
						
					},
					{
						"name": "GetUserStatsForGame",
						"version": 2,
						"httpmethod": "GET",
						"parameters": [
							{
								"name": "key",
								"type": "string",
								"optional": false,
								"description": "access key"
							},
							{
								"name": "steamid",
								"type": "uint64",
								"optional": false,
								"description": "SteamID of user"
							},
							{
								"name": "appid",
								"type": "uint32",
								"optional": false,
								"description": "appid of game"
							}
						]
						
					}
				]
				
			},
			{
				"name": "ISteamWebAPIUtil",
				"methods": [
					{
						"name": "GetServerInfo",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [

						]
						
					},
					{
						"name": "GetSupportedAPIList",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [
							{
								"name": "key",
								"type": "string",
								"optional": true,
								"description": "access key"
							}
						]
						
					}
				]
				
			},
			{
				"name": "ISteamWebUserPresenceOAuth",
				"methods": [
					{
						"name": "PollStatus",
						"version": 1,
						"httpmethod": "POST",
						"parameters": [
							{
								"name": "steamid",
								"type": "string",
								"optional": false,
								"description": "Steam ID of the user"
							},
							{
								"name": "umqid",
								"type": "uint64",
								"optional": false,
								"description": "UMQ Session ID"
							},
							{
								"name": "message",
								"type": "uint32",
								"optional": false,
								"description": "Message that was last known to the user"
							},
							{
								"name": "pollid",
								"type": "uint32",
								"optional": true,
								"description": "Caller-specific poll id"
							},
							{
								"name": "sectimeout",
								"type": "uint32",
								"optional": true,
								"description": "Long-poll timeout in seconds"
							},
							{
								"name": "secidletime",
								"type": "uint32",
								"optional": true,
								"description": "How many seconds is client considering itself idle, e.g. screen is off"
							},
							{
								"name": "use_accountids",
								"type": "uint32",
								"optional": true,
								"description": "Boolean, 0 (default): return steamid_from in output, 1: return accountid_from"
							}
						]
						
					}
				]
				
			},
			{
				"name": "ITFItems_440",
				"methods": [
					{
						"name": "GetGoldenWrenches",
						"version": 2,
						"httpmethod": "GET",
						"parameters": [

						]
						
					}
				]
				
			},
			{
				"name": "ITFPromos_205790",
				"methods": [
					{
						"name": "GetItemID",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [
							{
								"name": "steamid",
								"type": "uint64",
								"optional": false,
								"description": "The Steam ID to fetch items for"
							},
							{
								"name": "promoid",
								"type": "uint32",
								"optional": false,
								"description": "The promo ID to grant an item for"
							}
						]
						
					},
					{
						"name": "GrantItem",
						"version": 1,
						"httpmethod": "POST",
						"parameters": [
							{
								"name": "steamid",
								"type": "uint64",
								"optional": false,
								"description": "The Steam ID to fetch items for"
							},
							{
								"name": "promoid",
								"type": "uint32",
								"optional": false,
								"description": "The promo ID to grant an item for"
							}
						]
						
					}
				]
				
			},
			{
				"name": "ITFPromos_440",
				"methods": [
					{
						"name": "GetItemID",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [
							{
								"name": "steamid",
								"type": "uint64",
								"optional": false,
								"description": "The Steam ID to fetch items for"
							},
							{
								"name": "promoid",
								"type": "uint32",
								"optional": false,
								"description": "The promo ID to grant an item for"
							}
						]
						
					},
					{
						"name": "GrantItem",
						"version": 1,
						"httpmethod": "POST",
						"parameters": [
							{
								"name": "steamid",
								"type": "uint64",
								"optional": false,
								"description": "The Steam ID to fetch items for"
							},
							{
								"name": "promoid",
								"type": "uint32",
								"optional": false,
								"description": "The promo ID to grant an item for"
							}
						]
						
					}
				]
				
			},
			{
				"name": "ITFPromos_570",
				"methods": [
					{
						"name": "GetItemID",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [
							{
								"name": "steamid",
								"type": "uint64",
								"optional": false,
								"description": "The Steam ID to fetch items for"
							},
							{
								"name": "promoid",
								"type": "uint32",
								"optional": false,
								"description": "The promo ID to grant an item for"
							}
						]
						
					},
					{
						"name": "GrantItem",
						"version": 1,
						"httpmethod": "POST",
						"parameters": [
							{
								"name": "steamid",
								"type": "uint64",
								"optional": false,
								"description": "The Steam ID to fetch items for"
							},
							{
								"name": "promoid",
								"type": "uint32",
								"optional": false,
								"description": "The promo ID to grant an item for"
							}
						]
						
					}
				]
				
			},
			{
				"name": "ITFPromos_620",
				"methods": [
					{
						"name": "GetItemID",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [
							{
								"name": "steamid",
								"type": "uint64",
								"optional": false,
								"description": "The Steam ID to fetch items for"
							},
							{
								"name": "PromoID",
								"type": "uint32",
								"optional": false,
								"description": "The promo ID to grant an item for"
							}
						]
						
					},
					{
						"name": "GrantItem",
						"version": 1,
						"httpmethod": "POST",
						"parameters": [
							{
								"name": "steamid",
								"type": "uint64",
								"optional": false,
								"description": "The Steam ID to fetch items for"
							},
							{
								"name": "PromoID",
								"type": "uint32",
								"optional": false,
								"description": "The promo ID to grant an item for"
							}
						]
						
					}
				]
				
			},
			{
				"name": "ITFSystem_440",
				"methods": [
					{
						"name": "GetWorldStatus",
						"version": 1,
						"httpmethod": "GET",
						"parameters": [

						]
						
					}
				]
				
			},
			{
				"name": "IGameServersService",
				"methods": [
					{
						"name": "GetAccountList",
						"version": 1,
						"httpmethod": "GET",
						"description": "Gets a list of game server accounts with their logon tokens",
						"parameters": [
							{
								"name": "key",
								"type": "string",
								"optional": false,
								"description": "Access key"
							}
						]
						
					},
					{
						"name": "CreateAccount",
						"version": 1,
						"httpmethod": "POST",
						"description": "Creates a persistent game server account",
						"parameters": [
							{
								"name": "key",
								"type": "string",
								"optional": false,
								"description": "Access key"
							},
							{
								"name": "appid",
								"type": "uint32",
								"optional": false,
								"description": "The app to use the account for"
							},
							{
								"name": "memo",
								"type": "string",
								"optional": false,
								"description": "The memo to set on the new account"
							}
						]
						
					},
					{
						"name": "SetMemo",
						"version": 1,
						"httpmethod": "POST",
						"description": "This method changes the memo associated with the game server account. Memos do not affect the account in any way. The memo shows up in the GetAccountList response and serves only as a reminder of what the account is used for.",
						"parameters": [
							{
								"name": "key",
								"type": "string",
								"optional": false,
								"description": "Access key"
							},
							{
								"name": "steamid",
								"type": "uint64",
								"optional": false,
								"description": "The SteamID of the game server to set the memo on"
							},
							{
								"name": "memo",
								"type": "string",
								"optional": false,
								"description": "The memo to set on the new account"
							}
						]
						
					},
					{
						"name": "ResetLoginToken",
						"version": 1,
						"httpmethod": "POST",
						"description": "Generates a new login token for the specified game server",
						"parameters": [
							{
								"name": "key",
								"type": "string",
								"optional": false,
								"description": "Access key"
							},
							{
								"name": "steamid",
								"type": "uint64",
								"optional": false,
								"description": "The SteamID of the game server to reset the login token of"
							}
						]
						
					},
					{
						"name": "DeleteAccount",
						"version": 1,
						"httpmethod": "POST",
						"description": "Deletes a persistent game server account",
						"parameters": [
							{
								"name": "key",
								"type": "string",
								"optional": false,
								"description": "Access key"
							},
							{
								"name": "steamid",
								"type": "uint64",
								"optional": false,
								"description": "The SteamID of the game server account to delete"
							}
						]
						
					},
					{
						"name": "GetAccountPublicInfo",
						"version": 1,
						"httpmethod": "GET",
						"description": "Gets public information about a given game server account",
						"parameters": [
							{
								"name": "key",
								"type": "string",
								"optional": false,
								"description": "Access key"
							},
							{
								"name": "steamid",
								"type": "uint64",
								"optional": false,
								"description": "The SteamID of the game server to get info on"
							}
						]
						
					},
					{
						"name": "QueryLoginToken",
						"version": 1,
						"httpmethod": "GET",
						"description": "Queries the status of the specified token, which must be owned by you",
						"parameters": [
							{
								"name": "key",
								"type": "string",
								"optional": false,
								"description": "Access key"
							},
							{
								"name": "login_token",
								"type": "string",
								"optional": false,
								"description": "Login token to query"
							}
						]
						
					},
					{
						"name": "GetServerSteamIDsByIP",
						"version": 1,
						"httpmethod": "GET",
						"description": "Gets a list of server SteamIDs given a list of IPs",
						"parameters": [
							{
								"name": "key",
								"type": "string",
								"optional": false,
								"description": "Access key"
							},
							{
								"name": "server_ips",
								"type": "string",
								"optional": false
							}
						]
						
					},
					{
						"name": "GetServerIPsBySteamID",
						"version": 1,
						"httpmethod": "GET",
						"description": "Gets a list of server IP addresses given a list of SteamIDs",
						"parameters": [
							{
								"name": "key",
								"type": "string",
								"optional": false,
								"description": "Access key"
							},
							{
								"name": "server_steamids",
								"type": "uint64",
								"optional": false
							}
						]
						
					}
				]
				
			},
			{
				"name": "IPublishedFileService",
				"methods": [
					{
						"name": "QueryFiles",
						"version": 1,
						"httpmethod": "GET",
						"description": "Performs a search query for published files",
						"parameters": [
							{
								"name": "key",
								"type": "string",
								"optional": false,
								"description": "Access key"
							},
							{
								"name": "query_type",
								"type": "uint32",
								"optional": false,
								"description": "enumeration EPublishedFileQueryType in clientenums.h"
							},
							{
								"name": "page",
								"type": "uint32",
								"optional": false,
								"description": "Current page"
							},
							{
								"name": "numperpage",
								"type": "uint32",
								"optional": true,
								"description": "(Optional) The number of results, per page to return."
							},
							{
								"name": "creator_appid",
								"type": "uint32",
								"optional": false,
								"description": "App that created the files"
							},
							{
								"name": "appid",
								"type": "uint32",
								"optional": false,
								"description": "App that consumes the files"
							},
							{
								"name": "requiredtags",
								"type": "string",
								"optional": false,
								"description": "Tags to match on. See match_all_tags parameter below"
							},
							{
								"name": "excludedtags",
								"type": "string",
								"optional": false,
								"description": "(Optional) Tags that must NOT be present on a published file to satisfy the query."
							},
							{
								"name": "match_all_tags",
								"type": "bool",
								"optional": true,
								"description": "If true, then items must have all the tags specified, otherwise they must have at least one of the tags."
							},
							{
								"name": "required_flags",
								"type": "string",
								"optional": false,
								"description": "Required flags that must be set on any returned items"
							},
							{
								"name": "omitted_flags",
								"type": "string",
								"optional": false,
								"description": "Flags that must not be set on any returned items"
							},
							{
								"name": "search_text",
								"type": "string",
								"optional": false,
								"description": "Text to match in the item's title or description"
							},
							{
								"name": "filetype",
								"type": "uint32",
								"optional": false,
								"description": "EPublishedFileInfoMatchingFileType"
							},
							{
								"name": "child_publishedfileid",
								"type": "uint64",
								"optional": false,
								"description": "Find all items that reference the given item."
							},
							{
								"name": "days",
								"type": "uint32",
								"optional": false,
								"description": "If query_type is k_PublishedFileQueryType_RankedByTrend, then this is the number of days to get votes for [1,7]."
							},
							{
								"name": "include_recent_votes_only",
								"type": "bool",
								"optional": false,
								"description": "If query_type is k_PublishedFileQueryType_RankedByTrend, then limit result set just to items that have votes within the day range given"
							},
							{
								"name": "cache_max_age_seconds",
								"type": "uint32",
								"optional": true,
								"description": "Allow stale data to be returned for the specified number of seconds."
							},
							{
								"name": "language",
								"type": "int32",
								"optional": true,
								"description": "Language to search in and also what gets returned. Defaults to English."
							},
							{
								"name": "required_kv_tags",
								"type": "{message}",
								"optional": false,
								"description": "Required key-value tags to match on."
							},
							{
								"name": "totalonly",
								"type": "bool",
								"optional": false,
								"description": "(Optional) If true, only return the total number of files that satisfy this query."
							},
							{
								"name": "return_vote_data",
								"type": "bool",
								"optional": false,
								"description": "Return vote data"
							},
							{
								"name": "return_tags",
								"type": "bool",
								"optional": false,
								"description": "Return tags in the file details"
							},
							{
								"name": "return_kv_tags",
								"type": "bool",
								"optional": false,
								"description": "Return key-value tags in the file details"
							},
							{
								"name": "return_previews",
								"type": "bool",
								"optional": false,
								"description": "Return preview image and video details in the file details"
							},
							{
								"name": "return_children",
								"type": "bool",
								"optional": false,
								"description": "Return child item ids in the file details"
							},
							{
								"name": "return_short_description",
								"type": "bool",
								"optional": false,
								"description": "Populate the short_description field instead of file_description"
							},
							{
								"name": "return_for_sale_data",
								"type": "bool",
								"optional": false,
								"description": "Return pricing information, if applicable"
							},
							{
								"name": "return_metadata",
								"type": "bool",
								"optional": true,
								"description": "Populate the metadata"
							}
						]
						
					}
				]
				
			},
			{
				"name": "IPlayerService",
				"methods": [
					{
						"name": "RecordOfflinePlaytime",
						"version": 1,
						"httpmethod": "POST",
						"description": "Tracks playtime for a user when they are offline",
						"parameters": [
							{
								"name": "steamid",
								"type": "uint64",
								"optional": false
							},
							{
								"name": "ticket",
								"type": "string",
								"optional": false
							},
							{
								"name": "play_sessions",
								"type": "{message}",
								"optional": false
							}
						]
						
					},
					{
						"name": "GetRecentlyPlayedGames",
						"version": 1,
						"httpmethod": "GET",
						"description": "Gets information about a player's recently played games",
						"parameters": [
							{
								"name": "key",
								"type": "string",
								"optional": false,
								"description": "Access key"
							},
							{
								"name": "steamid",
								"type": "uint64",
								"optional": false,
								"description": "The player we're asking about"
							},
							{
								"name": "count",
								"type": "uint32",
								"optional": false,
								"description": "The number of games to return (0/unset: all)"
							}
						]
						
					},
					{
						"name": "GetOwnedGames",
						"version": 1,
						"httpmethod": "GET",
						"description": "Return a list of games owned by the player",
						"parameters": [
							{
								"name": "key",
								"type": "string",
								"optional": false,
								"description": "Access key"
							},
							{
								"name": "steamid",
								"type": "uint64",
								"optional": false,
								"description": "The player we're asking about"
							},
							{
								"name": "include_appinfo",
								"type": "bool",
								"optional": false,
								"description": "true if we want additional details (name, icon) about each game"
							},
							{
								"name": "include_played_free_games",
								"type": "bool",
								"optional": false,
								"description": "Free games are excluded by default.  If this is set, free games the user has played will be returned."
							},
							{
								"name": "appids_filter",
								"type": "uint32",
								"optional": false,
								"description": "if set, restricts result set to the passed in apps"
							}
						]
						
					},
					{
						"name": "GetSteamLevel",
						"version": 1,
						"httpmethod": "GET",
						"description": "Returns the Steam Level of a user",
						"parameters": [
							{
								"name": "key",
								"type": "string",
								"optional": false,
								"description": "Access key"
							},
							{
								"name": "steamid",
								"type": "uint64",
								"optional": false,
								"description": "The player we're asking about"
							}
						]
						
					},
					{
						"name": "GetBadges",
						"version": 1,
						"httpmethod": "GET",
						"description": "Gets badges that are owned by a specific user",
						"parameters": [
							{
								"name": "key",
								"type": "string",
								"optional": false,
								"description": "Access key"
							},
							{
								"name": "steamid",
								"type": "uint64",
								"optional": false,
								"description": "The player we're asking about"
							}
						]
						
					},
					{
						"name": "GetCommunityBadgeProgress",
						"version": 1,
						"httpmethod": "GET",
						"description": "Gets all the quests needed to get the specified badge, and which are completed",
						"parameters": [
							{
								"name": "key",
								"type": "string",
								"optional": false,
								"description": "Access key"
							},
							{
								"name": "steamid",
								"type": "uint64",
								"optional": false,
								"description": "The player we're asking about"
							},
							{
								"name": "badgeid",
								"type": "int32",
								"optional": false,
								"description": "The badge we're asking about"
							}
						]
						
					},
					{
						"name": "IsPlayingSharedGame",
						"version": 1,
						"httpmethod": "GET",
						"description": "Returns valid lender SteamID if game currently played is borrowed",
						"parameters": [
							{
								"name": "key",
								"type": "string",
								"optional": false,
								"description": "Access key"
							},
							{
								"name": "steamid",
								"type": "uint64",
								"optional": false,
								"description": "The player we're asking about"
							},
							{
								"name": "appid_playing",
								"type": "uint32",
								"optional": false,
								"description": "The game player is currently playing"
							}
						]
						
					}
				]
				
			},
			{
				"name": "IInventoryService",
				"methods": [
					{
						"name": "GetPriceSheet",
						"version": 1,
						"httpmethod": "GET",
						"description": "Get the Inventory Service price sheet",
						"parameters": [
							{
								"name": "key",
								"type": "string",
								"optional": false,
								"description": "Access key"
							},
							{
								"name": "ecurrency",
								"type": "int32",
								"optional": false
							}
						]
						
					}
				]
				
			},
			{
				"name": "IEconService",
				"methods": [
					{
						"name": "GetTradeOffers",
						"version": 1,
						"httpmethod": "GET",
						"description": "Get a list of sent or received trade offers",
						"parameters": [
							{
								"name": "key",
								"type": "string",
								"optional": false,
								"description": "Access key"
							},
							{
								"name": "get_sent_offers",
								"type": "bool",
								"optional": false,
								"description": "Request the list of sent offers."
							},
							{
								"name": "get_received_offers",
								"type": "bool",
								"optional": false,
								"description": "Request the list of received offers."
							},
							{
								"name": "get_descriptions",
								"type": "bool",
								"optional": false,
								"description": "If set, the item display data for the items included in the returned trade offers will also be returned."
							},
							{
								"name": "language",
								"type": "string",
								"optional": false,
								"description": "The language to use when loading item display data."
							},
							{
								"name": "active_only",
								"type": "bool",
								"optional": false,
								"description": "Indicates we should only return offers which are still active, or offers that have changed in state since the time_historical_cutoff"
							},
							{
								"name": "historical_only",
								"type": "bool",
								"optional": false,
								"description": "Indicates we should only return offers which are not active."
							},
							{
								"name": "time_historical_cutoff",
								"type": "uint32",
								"optional": false,
								"description": "When active_only is set, offers updated since this time will also be returned"
							}
						]
						
					},
					{
						"name": "GetTradeOffer",
						"version": 1,
						"httpmethod": "GET",
						"description": "Gets a specific trade offer",
						"parameters": [
							{
								"name": "key",
								"type": "string",
								"optional": false,
								"description": "Access key"
							},
							{
								"name": "tradeofferid",
								"type": "uint64",
								"optional": false
							},
							{
								"name": "language",
								"type": "string",
								"optional": false
							}
						]
						
					},
					{
						"name": "GetTradeOffersSummary",
						"version": 1,
						"httpmethod": "GET",
						"description": "Get counts of pending and new trade offers",
						"parameters": [
							{
								"name": "key",
								"type": "string",
								"optional": false,
								"description": "Access key"
							},
							{
								"name": "time_last_visit",
								"type": "uint32",
								"optional": false,
								"description": "The time the user last visited.  If not passed, will use the time the user last visited the trade offer page."
							}
						]
						
					},
					{
						"name": "DeclineTradeOffer",
						"version": 1,
						"httpmethod": "POST",
						"description": "Decline a trade offer someone sent to us",
						"parameters": [
							{
								"name": "key",
								"type": "string",
								"optional": false,
								"description": "Access key"
							},
							{
								"name": "tradeofferid",
								"type": "uint64",
								"optional": false
							}
						]
						
					},
					{
						"name": "CancelTradeOffer",
						"version": 1,
						"httpmethod": "POST",
						"description": "Cancel a trade offer we sent",
						"parameters": [
							{
								"name": "key",
								"type": "string",
								"optional": false,
								"description": "Access key"
							},
							{
								"name": "tradeofferid",
								"type": "uint64",
								"optional": false
							}
						]
						
					}
				]
				
			},
			{
				"name": "ICheatReportingService",
				"methods": [
					{
						"name": "ReportCheatData",
						"version": 1,
						"httpmethod": "POST",
						"description": "Reports cheat data. Only use on test account that is running the game but not in a multiplayer session.",
						"parameters": [
							{
								"name": "key",
								"type": "string",
								"optional": false,
								"description": "Access key"
							},
							{
								"name": "steamid",
								"type": "uint64",
								"optional": false,
								"description": "steamid of the user running and reporting the cheat."
							},
							{
								"name": "appid",
								"type": "uint32",
								"optional": false,
								"description": "The appid."
							},
							{
								"name": "pathandfilename",
								"type": "string",
								"optional": false,
								"description": "path and file name of the cheat executable."
							},
							{
								"name": "webcheaturl",
								"type": "string",
								"optional": false,
								"description": "web url where the cheat was found and downloaded."
							},
							{
								"name": "time_now",
								"type": "uint64",
								"optional": false,
								"description": "local system time now."
							},
							{
								"name": "time_started",
								"type": "uint64",
								"optional": false,
								"description": "local system time when cheat process started. ( 0 if not yet run )"
							},
							{
								"name": "time_stopped",
								"type": "uint64",
								"optional": false,
								"description": "local system time when cheat process stopped. ( 0 if still running )"
							},
							{
								"name": "cheatname",
								"type": "string",
								"optional": false,
								"description": "descriptive name for the cheat."
							},
							{
								"name": "game_process_id",
								"type": "uint32",
								"optional": false,
								"description": "process ID of the running game."
							},
							{
								"name": "cheat_process_id",
								"type": "uint32",
								"optional": false,
								"description": "process ID of the cheat process that ran"
							},
							{
								"name": "cheat_param_1",
								"type": "uint64",
								"optional": false,
								"description": "cheat param 1"
							},
							{
								"name": "cheat_param_2",
								"type": "uint64",
								"optional": false,
								"description": "cheat param 2"
							}
						]
						
					}
				]
				
			},
			{
				"name": "IAccountRecoveryService",
				"methods": [
					{
						"name": "ReportAccountRecoveryData",
						"version": 1,
						"httpmethod": "POST",
						"description": "Send account recovery data",
						"parameters": [
							{
								"name": "loginuser_list",
								"type": "string",
								"optional": false
							},
							{
								"name": "install_config",
								"type": "string",
								"optional": false
							},
							{
								"name": "shasentryfile",
								"type": "string",
								"optional": false
							},
							{
								"name": "machineid",
								"type": "string",
								"optional": false
							}
						]
						
					},
					{
						"name": "RetrieveAccountRecoveryData",
						"version": 1,
						"httpmethod": "POST",
						"description": "Send account recovery data",
						"parameters": [
							{
								"name": "requesthandle",
								"type": "string",
								"optional": false
							}
						]
						
					}
				]
				
			}
		]
		
	}
}