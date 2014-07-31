"use strict";

module.exports = {
  "version": 3,
  "sprite": "https://www.mapbox.com/mapbox-gl-styles/sprites/outdoors",
  "glyphs": "https://mapbox.s3.amazonaws.com/gl-glyphs-256/{fontstack}/{range}.pbf",
  "sources": {
    "mapbox": {
      "type": "vector",
      "url": "mapbox://mapbox.mapbox-terrain-v1,mapbox.mapbox-streets-v5",
      "maxZoom": 14
    },
    "satellite": {
      "type": "raster",
      "url": "https://a.tiles.mapbox.com/v3/justin.map-o9xkljzy/{z}/{x}/{y}.png256",
      "maxZoom": 19,
      "tileSize": 256
    }
  },
  "constants": {
    "@land": "rgb(244,239,225)",
    "@water": "#cdd",
    "@water_dark": "#185869",
    "@crop": "#eeeed4",
    "@grass": "#e6e6cc",
    "@scrub": "#dfe5c8",
    "@wood": "#cee2bd",
    "@snow": "#f4f8ff",
    "@rock": "#ddd",
    "@sand": "#ffd",
    "@cemetery": "#edf4ed",
    "@pitch": "#fff",
    "@park": "#d4e4bc",
    "@piste": "blue",
    "@school": "#e8dfe0",
    "@hospital": "#f8eee0",
    "@builtup": "#f6faff",
    "@case": "#fff",
    "@motorway": "#cda0a0",
    "@main": "#ddc0b9",
    "@street": "#fff",
    "@text": "#666",
    "@text_stroke": "rgba(255,255,255,0.8)",
    "@country_text": "#222",
    "@marine_text": "#a0bdc0",
    "@water_text": "#185869",
    "@land_night": "#017293",
    "@water_night": "#103",
    "@water_dark_night": "#003366",
    "@crop_night": "#178d96",
    "@grass_night": "#23948a",
    "@scrub_night": "#31a186",
    "@wood_night": "#45b581",
    "@park_night": "#51bd8b",
    "@snow_night": "#5ad9fe",
    "@rock_night": "#999",
    "@sand_night": "#437162",
    "@cemetery_night": "#218c96",
    "@pitch_night": "rgba(255,255,255,0.2)",
    "@school_night": "#01536a",
    "@hospital_night": "#015e7a",
    "@builtup_night": "#014b60",
    "@admin_night": "#ffb680",
    "@text_night": "#fff",
    "@text_water_night": "#2a5b8a",
    "@text_stroke_night": "#103",
    "@text2_stroke_night": "rgba(1,69,89,0.8)",
    "@case_night": "#015e7a",
    "@street_case_night": "#015b76",
    "@motorway_night": "#bbdde7",
    "@main_night": "#64b2c9",
    "@street_night": "#0186ac",
    "@contour_night": "#ffff80",
    "@river_canal_width": {
      "stops": [[10, 0.5], [11, 1], [13, 2], [15, 3]]
    },
    "@stream_width": {
      "stops": [[12, 0.25], [13, 0.5], [15, 1.5], [17, 2]]
    },
    "@motorway_width": {
      "stops": [[4, 0], [5, 0.5], [7, 0.8], [9, 1], [10, 1.2], [11, 2], [12, 3], [13, 4], [14, 6], [15, 9], [16, 12], [17, 14]]
    },
    "@motorway_casing_width": {
      "stops": [[6.5, 0.6], [7, 0.8], [9, 2.8], [10, 3], [11, 4], [12, 5], [13, 6.5], [14, 9], [15, 12], [16, 15], [17, 17]]
    },
    "@motorway_link_width": {
      "stops": [[11, 1.2], [13, 2], [15, 3], [17, 4]]
    },
    "@motorway_link_casing_width": {
      "stops": [[11, 2.8], [13, 3.5], [15, 5], [17, 6]]
    },
    "@main_width": {
      "stops": [[4, 1], [11, 1], [12, 1.5], [13, 2], [14, 3], [15, 6], [16, 10], [17, 12]]
    },
    "@main_casing_width": {
      "stops": [[8, 2.9], [11, 2.9], [12, 3.5], [13, 4], [14, 5.5], [15, 9], [16, 12], [17, 14]]
    },
    "@street_width": {
      "stops": [[13.5, 0], [14, 1.5], [15, 3], [16, 8]]
    },
    "@street_casing_width": {
      "stops": [[12, 0.4], [13, 1], [14, 2.5], [15, 4], [16, 10]]
    },
    "@street_casing_opacity": {
      "stops": [[13, 0], [13.5, 1]]
    },
    "@service_casing_width": {
      "stops": [[13, 0.5], [14, 3], [15, 3.5], [16, 4], [17, 5], [18, 6]]
    },
    "@runway_width": {
      "stops": [[9, 1], [10, 2], [11, 3], [12, 5], [13, 7], [14, 11], [15, 15], [16, 19], [17, 23]]
    },
    "@taxiway_width": {
      "stops": [[9, 0.2], [11, 0.2], [12, 1], [13, 1.5], [14, 2], [15, 3], [16, 4], [17, 5]]
    },
    "@aerialway_width": {
      "stops": [[12.5, 0.8], [13, 1.4], [14, 1.6], [15, 2], [16, 2.4], [17, 3]]
    },
    "@aerialway_casing_width": {
      "stops": [[12.5, 2], [13, 2.5], [14, 3], [15, 3.5], [16, 4], [21, 5]]
    },
    "@path_width": {
      "stops": [[13, 1.2], [14, 1.5], [15, 1.8]]
    },
    "@admin_l2_width": {
      "stops": [[1, 0.5], [2, 0.7], [3, 0.7], [4, 0.8], [5, 1], [7, 2], [9, 3]]
    },
    "@admin_l3_width": {
      "stops": [[5, 0.6], [7, 1], [11, 2]]
    },
    "@road_label_1_size": {
      "stops": [[12, 11], [13, 12], [14, 13], [15, 14], [16, 16], [17, 18]]
    },
    "@road_label_2_size": {
      "stops": [[12, 11], [13, 12], [15, 14], [17, 16]]
    },
    "@road_label_3_size": {
      "stops": [[14, 10], [15, 12], [17, 14]]
    },
    "@fence_width": {
      "stops": [[16, 0.6], [18, 1]]
    },
    "@hedge_width": {
      "stops": [[15, 0.6], [16, 1.2], [18, 1.6]]
    },
    "@barrier_line_land_width": {
      "stops": [[13, 0.4], [14, 0.75], [15, 1.5], [16, 3], [17, 6], [18, 12], [19, 24], [20, 48]]
    },
    "@country_label_size": {
      "stops": [[0, 14], [11, 24]]
    },
    "@poi_label_1-2_size": {
      "stops": [[14, 10], [15, 11], [16, 12]]
    },
    "@poi_label_3_size": {
      "stops": [[15, 10], [16, 11]]
    },
    "@hillshade_rasterize": {
        "enabled": {
            "stops": [[10, false], [11, true]]
        },
        "size": {
            "stops": [[10, 1024], [11, 512], [12, 256]]
        },
        "blur": 1
    }
  },
  "layers": [{
    "id": "background",
    "type": "background",
    "style": {
      "background-color": "@land"
    },
    "style.night": {
      "background-color": "@land_night"
    }
  }, {
    "id": "satellite",
    "source": "satellite",
    "type": "raster"
  }]
};
