//Clean User.js

//About:config warning
user_pref("browser.aboutConfig.showWarning", false);

//Normandy
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");

//Permissions
user_pref("permissions.default.camera", 2);
user_pref("permissions.default.desktop-notification", 2);
user_pref("permissions.default.geo", 2);
user_pref("permissions.default.microphone", 2);
user_pref("permissions.default.xr", 2);

//Newtab preload
user_pref("newtab.preload", false);

//Captive Portal Detection
user_pref("captivedetect.canonicalURL", "");
user_pref("network.captive-portal-service.enabled", false);
user_pref("network.connectivity-service.enabled", false);

//Geolocation
user_pref("geo.enabled", false);
//Use Mozilla Location Services
user_pref("geo.provider.network.url", "https://location.services.mozilla.com/v1/geolocate?key=%MOZILLA_API_KEY%");
//Geolocation from OS
user_pref("geo.provider.use_gpsd", false); //Linux
//user_pref("ms-windows-location", false); //Windows
//user_pref("use_corelocation", false); //mac os

//Regional Updates
user_pref("browser.region.update.enabled", false);

//Regional Newtwork
user_pref("browser.region.network.url", "");

//Prefetching
//Link 
user_pref("network.prefetch-next", false);
//DNS 
user_pref("network.dns.disablePrefetch", true);
//Predictor
user_pref("network.predictor.enable", false);

//Firefox Sites Special Permissions
user_pref("permissions.manager.defaultsUrl", "");

//WebRTC Control
user_pref("media.peerconnection.ice.default_address_only", true);
user_pref("media.peerconnection.ice.no_host", true);
//WebGL Control
user_pref("media.autoplay.default", 5);

//Cookies Control
user_pref("browser.contentblocking.category", "strict");
user_pref("privacy.partition.serviceWorkers", true);

//Force LANG
user_pref("intl.accept_languages", "en-US, en");
user_pref("javascript.use_us_english_locale", true);

//Disk cache
user_pref("browser.cache.disk.enable", false);
user_pref("browser.sessionstore.privacy_level", 2);
user_pref("browser.sessionstore.resume_from_crash", false);

//WebNotification
user_pref("dom.webnotifications.enabled", false);

//Set StartUp Page
user_pref("browser.startup.page", 1);
//Set Homepage
user_pref("browser.startup.homepage", "start.duckduckgo.com");

//Search Bar next to Address Bar
user_pref("browser.search.widget.inNavBar", true);

//UI
user_pref("extensions.Screenshots.disabled", true);
user_pref("pdfjs.enableScripting", false);

//Downlaod
user_pref("browser.download.useDownloadDir", false);
user_pref("browser.download.manager.addToRecentDocs", false);

//Advanced info Insecure Connection warning 
user_pref("browser.xul.error_pages.expert_bad_cert", true);

//Search Suggestions
user_pref("browser.search.suggest.enabled", false);
//Urlbar Suggestions
user_pref("browser.urlbar.suggest.topsites", false);
user_pref("browser.urlbar.suggest.searches", false);
user_pref("browser.urlbar.suggest.remotetab", false);
user_pref("browser.urlbar.suggest.openpage", false);
user_pref("browser.urlbar.suggest.history", false);
user_pref("browser.urlbar.suggest.engines", false);
user_pref("browser.urlbar.suggest.bookmark", false);
user_pref("browser.urlbar.suggest.bestmatch", false);
user_pref("browser.urlbar.showSearchSuggestionsFirst", false);
user_pref("browser.urlbar.speculativeConnect.enabled", false);
//Location Bar Domain Guessing
user_pref("browser.fixup.alternate.enabled", false);
//Display all URL
user_pref("browser.urlbar.trimURLs", false);

//Autofill
user_pref("browser.urlbar.autoFill", false);
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.available", "off");
user_pref("extensions.formautofill.creditCards.available", false);
user_pref("extensions.formautofill.creditCards.enabled", false);
user_pref("extensions.formautofill.creditCards.supported", "off");
user_pref("extensions.formautofill.section.enabled", false);
user_pref("signon.autofillForms", false);
user_pref("extensions.formautofill.heuristics.enabled", false);
user_pref("browser.formfill.enable", false);

//Password
user_pref("signon.rememberSignons", false);
user_pref("signon.formlessCapture.enabled", false);
user_pref("network.auth.subresource-http-auth-allow", false);

//Studies
user_pref("app.shield.optoutstudies.enabled", false);
//Crash Reports
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("breakpad.reportURL", "");

//Addons Recommendations
user_pref("extensions.getAddons.showPane", false);
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);

//Auto Updates
user_pref("app.update.auto", false); //Linux
//user_pref("app.update.background.scheduling.enabled", false); //Windows

//HTTPS
user_pref("dom.security.https_only_mode", true);

//Telemetry
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("toolkit.telemetry.enabled", false); //Default: false
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.coverage.opt-out", true); //Hidden pref
user_pref("toolkit.coverage.opt-out", true); //Hidden pref
user_pref("toolkit.coverage.endpoint.base.", "");
user_pref("browser.ping-centre.telemetry", false);
user_pref("beacon.enabled", false);

//Clear history when Firefox closes
user_pref("network.cookie.lifetimePolicy", 2);
user_pref("privacy.sanitize.sanitizeOnShutdown", true);
user_pref("privacy.clearOnShutdown.cache", true);
user_pref("privacy.clearOnShutdown.cookies", true);
user_pref("privacy.clearOnShutdown.downloads", true);
user_pref("privacy.clearOnShutdown.formdata", true);
user_pref("privacy.clearOnShutdown.history", true);
user_pref("privacy.clearOnShutdown.offlineApps", true);
user_pref("privacy.clearOnShutdown.sessions", true);
user_pref("privacy.clearOnShutdown.sitesettings", true);
user_pref("privacy.sanitize.timeSpan", 0);

//Activity Stream in newtab
//Newtab thumbnails
user_pref("browser.newtabpage.enable", false);
//Link for Activity Stream telemetry
user_pref("browser.newtabpage.activity-stream.telemetry.structuredIngestion.endpoint", "");
//Activity Stream telemetry
user_pref("browser.newtabpage.activity-stream.telemetry", false);
//Activity Stream Sponsored Top Sites in newtab
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
//Activity Stream show Sponsored Sites in newtab
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
//Activity Stream show search bar in newtab
user_pref("browser.newtabpage.activity-stream.showSearch", false);
//Activity Stream include visited sites 
user_pref("browser.newtabpage.activity-stream.section.highlights.includeVisited", false);
//Activity Stream include pocket 
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false);
//Activity Stream include downloads
user_pref("browser.newtabpage.activity-stream.highlights.includeDownloads", false);
//Activity Stream include bookmarks
user_pref("browser.newtabpage.activity-stream.highlights.includeBookmarks", false);
//Activity Stream Search Engine top site shortcut
user_pref("browser.newtabpage.activity-stream.improvesearch.topSiteSearchShortcuts.searchEngines", "");
//Activity Stream top site shortcut
user_pref("browser.newtabpage.activity-stream.improvesearch.topSiteSearchShortcuts", false);
//Activity Stream do not use address bar
user_pref("browser.newtabpage.activity-stream.improvesearch.handoffToAwesomebar", true);
//Activity Stream Firefox account 
user_pref("browser.newtabpage.activity-stream.fxaccounts.endpoint", "");
//Activity Stream feed top sites
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);
//Activity Stream feed telemetry
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
//Activity Stream feed blank
user_pref("browser.newtabpage.activity-stream.feeds.systemtick", false);
//Activity Stream feed top sites
user_pref("browser.newtabpage.activity-stream.system.topsites", false);
//Activity Stream snippets
user_pref("browser.newtabpage.activity-stream.snippets", false);
//Activity Stream sections
user_pref("browser.newtabpage.activity-stream.sections", false);
//Activity Stream feed section top stories
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);
//Activity Stream feed section highlights
user_pref("browser.newtabpage.activity-stream.feeds.section.highlights", false);
//Activity Stream feed recommendation provider
user_pref("browser.newtabpage.activity-stream.feeds.recommendationprovider", false);
//Activity Stream feed discovery stream
user_pref("browser.newtabpage.activity-stream.feeds.discoverystreamfeed", false);
//Activity Stream default sites
user_pref("browser.newtabpage.activity-stream.default.sites", "");

//Disable Pocket
user_pref("extensions.pocket.api", "");
user_pref("extensions.pocket.enabled", false);
user_pref("extensions.pocket.onSaveRecs", false);
user_pref("extensions.pocket.showHome", false);
user_pref("extensions.pocket.site", "");
user_pref("services.sync.prefs.sync.browser.newtabpage.activity-stream.section.highlights.includePocket", false);

//Firefox Account
user_pref("identity.fxaccounts.auth.uri", "");
user_pref("identity.fxaccounts.commands.enabled", false);
user_pref("identity.fxaccounts.enabled", false);
user_pref("identity.fxaccounts.pairing.enabled", false);
user_pref("identity.fxaccounts.remote.oauth.uri", "");
user_pref("identity.fxaccounts.remote.pairing.uri", "");
user_pref("identity.fxaccounts.remote.profile.uri", "");
user_pref("identity.fxaccounts.remote.root", "");
user_pref("identity.fxaccounts.service.monitorLoginUrl", "");
user_pref("identity.fxaccounts.toolbar.enabled", false);
