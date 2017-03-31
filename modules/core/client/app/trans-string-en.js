(function (app) {
  'use strict';

  // Setting HTML5 Location Mode
  angular
    .module(app.applicationModuleName)
    .config(transConfig);

  // **************************************************
  // English Strings
  // --------------------------------------------------
  // Don`t change other code
  // **************************************************

  var stringen = {
    COMINGSOON: 'coming soon...',

    //client topbar menu
    MENU_CHAT: 'Chat',
    MENU_TORRENTS: 'Torrents',
    MENU_UPLOADS: 'Uploads',
    MENU_FORUMS: 'Forums',
    MENU_RANKING: 'Ranking',
    MENU_RULES: 'Rules',
    MENU_VIP: 'VIP',
    MENU_ADMIN: 'Admin',

    //sub menu of torrents
    MENU_TORRENTS_SUB: {
      SUB_MOVIE: 'Movie',
      SUB_MTV: 'MTV',
      SUB_MUSIC: 'Music',
      SUB_OTHER: 'Other'
    },

    //client menu
    SIGNOUT: 'Signout',
    SIGNIN: 'Sign In',
    SIGNUP: 'Sign Up',
    EDIT_PROFILE: 'Edit Profile',
    EDIT_PROFILE_PIC: 'Edit Profile Picture',
    CHANGE_PASSWORD: 'Change Password',
    MANAGE_SOCIAL_ACCOUNTS: 'Manage Social Accounts',

    //Uploads rules
    UPLOADS_RULES: 'Uploads Rules:',
    UPLOADS_RULES_COUNT: '6',
    UPLOADS_RULES_CONTENT: [
      'The torrent file`s Tracker URL must be: <mark><strong>{{url}}</strong></mark>.',
      'The torrent file`s TMDB_ID must be TheMovieDB resources ID, <strong><a href="https://www.themoviedb.org/" target="_blank">you can find the ID from here</a></strong>.',
      'The resources detail info can be autoload, if it`s fine, then you can submit it.',
      'Select one or more tags that match the resources, which will play a significant role in your search results.',
      'After the submission of documents, may be approved by the management, the rules do not meet the seeds will be deleted directly.',
      'For additional assistance, please contact our administrator: <strong><a href="mailto:#">{{admin}}</a></strong>.'
    ],

    //TorrentsUploadsController & views
    TORRENTS_UPLOAD_SUCCESSFULLY: 'Successfully uploads file',
    TORRENTS_UPLOAD_FAILED: 'Failed to uploads file',
    TORRENTS_NO_FILE_SELECTED: 'No file selected',

    SELECT_TORRENT_FILE: 'Please select the torrent file',
    SELECT_FILE: 'Select file',
    DO_UPLOADS: 'Uploads',
    ENTER_TMDB_ID: 'Please enter theMovieDB id 　<span style="font-size: 10pt;">[<a href="https://www.themoviedb.org/" target="_blank">find id on themofiedb.org</a>]</span>',
    LOAD_TMDB_INFO: 'Load info',
    TMDB_ID: 'TMDB ID',
    TMDB_ID_OK: 'MDB ID is ok! Get info successfully',
    TMDB_ID_ERROR: 'MDB ID is error! Get info failed',
    TMDB_ID_REQUIRED: 'Please enter TMDB ID',
    TMDB_MOVIE_INFO: 'The movie info from TMDB',
    TMDB_IS_LOADING: 'Loading the movie info, please wait...',


    ///////////////////////the movie db fields////////////////////////////////
    TMDB_FIELDS: {
      ID: 'id',
      IMDB_ID: 'imdb_id',
      IMDB_LINK: 'IMDB Link',
      TMDB_LINK: 'TMDB Link',
      HOMEPAGE: 'homepage',
      ADULT: 'adult',
      BUDGET: 'budget',
      REVENUE: 'revenue',
      ORIGINAL_LANGUAGE: 'original_language',
      ORIGINAL_TITLE: 'original_title',
      TITLE: 'title',
      BELONGS_TO_COLLECTION: 'belongs_to_collection',
      GENRES: 'genres',
      OVERVIEW: 'overview',
      POPULARITY: 'popularity',
      PRODUCTION_COMPANIES: 'production_companies',
      PRODUCTION_COUNTRIES: 'production_countries',
      RELEASE_DATE: 'release_date',
      RUNTIME: 'runtime',
      SPOKEN_LANGUAGES: 'spoken_languages',
      STATUS: 'status',
      TAGLINE: 'tagline',
      VIDEO: 'video',
      VOTE_AVERAGE: 'vote_average',
      VOTE_COUNT: 'vote_count',
      VOTE_UNIT: 'users',
      BACKDROP_PATH: 'backdrop_path',
      POSTER_PATH: 'poster_path',

      CAST: 'cast:'
    }
  };

  // **************************************************
  // English Strings end
  // **************************************************

  // config $translateProvider
  transConfig.$inject = ['$translateProvider'];
  function transConfig($translateProvider) {
    $translateProvider.translations('en', stringen);
  }

}(ApplicationConfiguration));
