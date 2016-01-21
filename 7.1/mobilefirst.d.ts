// Type definitions for MobileFirst 7.1
// Definitions by: Raymond Camden <https://github.com/cfjedimaster/>

/**
 * This is the core library for working with IBM MobileFirst and hybrid mobile apps.
 */
declare var WL: {

	/**
	 * The IBM® Worklight® Analytics API provides the ability to enable, disable, and log analytics data.
	 *
	 * The default settings is enabled, meaning data passed to the WL.Analytics.log API call by both the framework code and your code are persisted. You can explicitly enable or disable persistent data capture by calling WL.Analytics.enable or WL.Analytics.disable.
	 *
	 * Starting in IBM® Worklight® V6.2.0, the enabling of Analytics capture by declaring it in initOptions.js is deprecated. For backward compatibility, when Analytics is enabled using initOptions.js, the event WL/ANALYTICS/READY is triggered. It is no longer necessary to wait for this event in order to use the WL.Analytics API.
	 *
	 * Starting with IBM® Worklight® V6.2.0, the WL.Analytics API is available for use with no extra configuration or feature enablement required. Persistent collection of WL.Analytics.log data is enabled by default, and sent to the IBM® Worklight® server by default on successful network init.
	 *
	 * Note: the data collected via the WL.Analytics API, after sending it to the IBM Worklight server, is made available in the Operational Analytics engine console on the "Search" tab, and only the "Search" tab.
	 */
	Anayltics:{

		/**
		 * Turns off the capture of analytics data.
		 */
		disable():PromiseConstructorLike;

		/**
		 * Turns on the capture of analytics data.
		 */
		enable():PromiseConstructorLike;

		/**
		 * Logs a message with additional contextual information.
		 *
		 * @param message The message to log.
		 * @param name The name of the message to log.
		 */
		log(message: string, name: string):PromiseConstructorLike;

		/**
		 *
		 * @deprecated since version 6.2. WL.Analytics.restart is now a NOP.
		 */
		restart():PromiseConstructorLike;

		/**
		 * Send any analytics data collected up to this point to the IBM Worklight server.
		 */
		send():PromiseConstructorLike;

		/**
		 * Get the current state of WL.Analytics.
		 *
		 * The state object is kept by WL.Analytics and contains the following key:
		 *
		 * enabled (boolean) - Value is true if capture is enabled, false otherwise.
		 *
		 * Changing the state object that is returned does not affect the state object that is kept internally.
		 *
		 * WL.Analytics.state() .then(function (state) { // {enabled: true} }) .fail(function (errObj) { //errObj.src = function that failed //errObj.res = error message });
		 */
		state():PromiseConstructorLike;

	}

	App: {


		/**
		 * Registers an action receiver.
		 * @note {Note} In JavaScript code, a receiver must be implemented as a callback that can
		 * receive an object.
		 * @param {String} id. A string parameter used to uniquely identify receiver function, to be able
		 * to remove it at later stages.
		 * @param {Function} callback Mandatory. The JavaScript function that is called by the
		 * Worklight framework when an action is sent from native code to JavaScript code.
		 * @example {}
		 * WL.App.addActionReceiver('MyReceiver', function (receivedActon){
		 *  // process receivedAction
		 * });
		 */
		addActionReceiver():void;

		/**
			 * Opens the specified URL according to the specified target and options
			 * (specs). The behavior of this method depends on the app environment, as
			 * follows:
			 *  <table class="userTable" cellspacing="0">
			 <thead>
			<tr>
				<th>Environment</th>
				<th>Description</th>
			</tr>
			</thead>
			<tbody>
			<tr>
				<td class="attributes">Adobe AIR</td>
				<td class="nameDescription">Opens a new browser window at the specified URL. The target and options parameters are ignored.</td>
			</tr>
			<tr>
				<td class="attributes">TO BE COMPLETED</td>
				<td class="nameDescription">TO BE COMPLETED.</td>
			</tr>
			</tbody>
			</table>
			*
			* @param url
			*            Mandatory. The URL of the web page to be opened.
			* @param target
			*            Optional. The value to be used as the target (or name)
			*            parameter of JavaScript <code>window.open</code> method. If
			*            no value is specified, <code>_self</code> will be used.
			*
			* @param options
			*            Optional. Parameters hash.
			*            If no value is specified, the following options are used:
		*        status=1, toolbar=1, location=1, menubar=1, directories=1, resizable=1, scrollbars=1
			* @return A reference to the newly opened window, or NULL if no window was opened.
			*/
		openURL(url: string, target: string, options:Object):Window;

		/**
		 * Returns the locale code (or device language on BlackBerry).
		 * Returns the locale code according to user device settings, for example: en_US.
		 * @note {Note} On BlackBerry 6 and 7, this method returns the device language (for example, en), not the device locale.
		 */
		getDeviceLocale():string;

		/**
		 * Returns the language code.
		 * Returns the language code according to user device settings, for example: en.
		 */
		getDeviceLanguage():string;

		/**
		 * Returns a pattern string to format and parse numbers according to the client's user preferences.
		 * Returns the pattern to the successCallback with a properties object as a parameter,that contains :
		 * pattern,symbol,fraction,rounding,positive etc
		 */
		getLocalePattern():string;

		/**
		 * Returns the decimal separator.
		 * Returns the decimal separator accoriding to the region/locale preferences. eg : French uses "," but English uses "."
		 */
		getDecimalSeparator():string;

		/**
		 * Extracts a string that contains an error message.
		 * Extracts a string that contains the error message within the specified exception object.
		 * Use for exceptions that are thrown by the IBM® MobileFirst Platform® client runtime.
		 * @param {Function} callback Mandatory. The function that is called when Back is pressed.
		 * @example {}
		 * WL.App.overrideBackButton(backFunc);
		 * function backFunc(){
		 *    alert('you hit the back key!');
		 * }
		 */
		getErrorMessage(e:Function):string;

		/**
		 * Overrides the default behavior of the Back button on Android,
		 * Windows Phone 7.5 (deprecated in IBM Worklight V6.0.0), and Windows Phone 8.
		 *
		* Overrides the default behavior of the Back button on Android,
		* Windows Phone 7.5, and Windows Phone 8 devices, calling the callback function whenever Back is pressed.
		* @param exception Mandatory. The exception object from which the error string is extracted.
		*/
		overrideBackButton(f:Function):void;

		/**
		 * Resets the original Back button behavior.
		 *
		* Resets the original Back button behavior after it was changed by the overrideBackButton method.
		* @note {Note} This method applies to Android, Windows Phone 7.5 (deprecated in IBM Worklight V6.0.0), and Windows Phone 8 only.
		*/
		resetBackButton():void;

		/**
		 * Copies the specified string to the clipboard.
		 *
		* This method is applicable to iOS and Android.
		* @param {String} string Mandatory. The text to be copied to the clipboard
		* @param callback Optional. For Android environments only. The callback function that is called after the data is copied to the clipboard.
		*/
		copyToClipboard():void;

		/**
		 * Shows the default IBM Worklight splash screen on the activity that was passed as a parameter
		 */
		showSplashScreen():void;

		/**
		 * This method is applicable to iOS, Android and WP8. Sets the Worklight server URL to the specified URL.
Changes the Worklight server URL to the new URL, cleans the HTTP client context, and calls successCallback when finished. After calling this method, the application is not logged in to any server. If the specified URL is malformed, then failCallback is called and the Worklight server URL remains unchanged.
		 *
		 * Notes:
		 *
		 * The responsibility for checking the validity of the URL is on the developer.
		 * If the app uses push notification, it is the developer's responsibility to unsubscribe from the previous server and subscribe to the new server. For more information on push notification, see WL.Client.Push.
		 * When using this function you might want to perform additional clean-up, for example partial or full wipe of JSONStore or HTML5 LocalStorage. For more information on clean-up, see WL.EncryptedCache and WL.JSONStore.
		 *
		 * Example: WL.App.setServerUrl("http://9.148.23.88:10080/context", successCallback, failCallback);
		 *
		 * @param url Mandatory. The URL of the new server, including protocol, IP, port, and context.
		 * @param successCallback Optional. The callback function that is called after the Worklight URL is set to the specified URL.
		 * @param failCallback Optional. The callback function that is called if this method fails or is not supported.
		 */
		setServerUrl(url: string, successCallback?:Function, failCallback?:Function):void;

		/**
		 * Gets Worklight server URL. This method is asynchronous, so the Worklight server URL is returned as an argument to the successCallback function.
		 *
		 * @param successCallback Mandatory. The callback function that is called with the Worklight server URL as an argument.
		 * @param failCallback Optional. The callback function that is called if this method fails.
		 */
		getServerUrl(successCallback:Function,failCallback?:Function):void;

		/**
		 * Hides the default IBM Worklight splash screen if it is shown, and does nothing if the default Worklight splash screen is already hidden.
		 */
		hideSplashScreen():void;

		/**
		 * Sends an action and optional data object to native action receivers.
		 * Sends an action and optional data object to native action receivers.
		 * @note {Note} If there are no native action receivers registered, the action
		 * is queued until a native action receiver is registered.
		 * @param {String} action Custom string that represents an action. All receivers registered
		 * with the specified action receive the message.
		 * @param data Optional parameter: custom JSON object containing key-value pairs.
		 * @example {}
		 * WL.App.sendActionToNative("doSomething");
		 * WL.App.sendActionToNative("doSomething", { customData: 12345} );
		 */
		sendActionToNative():void;



		/**
		 * Removes a previously added receiver.
		 * Removes a previously added receiver. After this API is called, the receiver identified
		 * by receiverId no longer receives actions.
		 * @param {String} id. A string parameter used to uniquely identify a previously
		 * registered receiver function.
		 * @example {}
		 * WL.App.removeActionReceiver("MyReceiver");
		 */
		removeActionReceiver(id: string):void;

		/**
		 * When an app moves to the background, iOS keeps a snapshot of the app window, to facilitate a smoother transition back to the foreground. This class provides API to handle the background/foreground events that the user can use to disable the snapshot, and therefore prevent any sensitive data from being stored on the device.
		 */
		BackgroundHandler: {
			/**
			 * Defines the behavior of the application before it enters the background. Defines the behavior of the application just before iOS takes a screen capture of it before moving it to the background.
			 *
			 * @param handler The function that is called when the event is received from iOS that the application is about to enter background
			 */
			setOnAppEnteringBackground(handler:Function):void;

			/**
			 * Defines the behavior of the application just before it enters the foreground.
			 *
			 * @param handler  The function that is called when the event is received from iOS that the application is about to enter foreground.
			 */
			setonAppEnteringForeground(handler:Function):void;

		}
	}

	/**
	 *
	 */
	Badge: {
		/**
		 * Sets the application badge to the number provided. Sets the application badge to the number provided.
		 */
		setNumber(number:number):void;
	}

	/**
	 * Display an indication that the application is busy.
	 * Use the WL.BusyIndicator object to display a modal, dynamic graphical image when the application is temporarily "busy", that is, not responsive to user input.
	 *
	 * WL.BusyIndicator is implemented natively in the following environments: iOS, Android, Windows Phone 8 and Windows 8. For a list of available options, review the Constructor Details section below.
	 * WL.BusyIndicator is implemented using JavaScript in the remaining environments: Mobile Web, Desktop Browser, BlackBerry 6/7/10 and preview.
	 * To change the appearance of the busy indicator in these environments, override the following CSS selectors: #WLbusyOverlay, #WLbusy, and #WLbusyTitle.
	 */
	BusyIndicator(containerId?:string,options?:Object):BusyIndicatorObject;

	/**
	 * Displays an Android toast box with the specified string.
	 *
	 * @param string The text to display in the Android toast.
	 */
	Toast:{
		show(string: string):void;

	}
}

interface BusyIndicatorObject {

	/**
	 * To hide the busy indicator.
	 */
	hide();

	/**
	 * To show the busy indicator.
	 */
	show();
}
