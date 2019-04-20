$(function () {
	'use strict';

	/*
	 * Desktop icons
	 */

	WIN95.desktopIcons = {}

	WIN95.desktopIcons.myComputer = new WIN95.icon()
	WIN95.desktopIcons.myComputer.set({
		ID: 'myComputer',
		image: 'explorer_100',
		text: 'My Computer',
		rename: true
	}).render('#desktopIcons')

	WIN95.desktopIcons.networkNeighborhood = new WIN95.icon()
	WIN95.desktopIcons.networkNeighborhood.set({
		ID: 'networkNeighborhood',
		image: 'shell32_18',
		text: 'Network',
		rename: true
	}).render('#desktopIcons')

	WIN95.desktopIcons.recycleBin = new WIN95.icon()
	WIN95.desktopIcons.recycleBin.set({
		ID: 'recycleBin',
		image: 'shell32_32',
		text: 'Recycle Bin',
		rename: false
	}).render('#desktopIcons')

	/*
	 * Explorer icons
	 */

	var warning2 = function () {
		var dialog = new WIN95.dialogBox()
		dialog.set({
			ID: WIN95.getUniqueID(),
			image: 'mailnews_16',
			title: 'How does this work?',
			text: "BUGS!!! BUGS!!! BUGS EVERYWHERE",
			buttons: {
				'Take action': function (button) {
					console.log("YEY")
					window.location="https://www.instagram.com/torinturner"
				},
				'Cancel': function (button) {
					warning3()
				}
			}
		}).render()
	}

	var warning3 = function () {
		var dialog = new WIN95.dialogBox()
		dialog.set({
			ID: WIN95.getUniqueID(),
			image: 'nwnp32_SERVER_ICON',
			title: 'Red Rock Robotics',
			text: 'Check out my Robotics team from SLC, UT!',
			buttons: {
				'HERE': function (button) {
					window.location="https://www.redrockrobotics.space"
				},
				'Cancel': function (button) {
					warning4()
				}
			}
		}).render()
	}

	var warning4 = function () {
		var dialog = new WIN95.dialogBox()
		dialog.set({
			ID: WIN95.getUniqueID(),
			image: 'shell32_40',
			title: 'Internet ERROR',
			text: "PLEASE CLICK CONFIRM",
			buttons: {
				'Confirm': function (button) {
					window.location="https://www.instagram.com/torinturner"
				},
				'Cancel': function (button) {
					warningLoop()
				}
			}
		}).render()
	}
	var warningLoop = function () {
		var dialog = new WIN95.dialogBox()
		dialog.set({
			ID: WIN95.getUniqueID(),
			image: 'shdocvw_258',
			title: 'Internet ERROR',
			text: "Cannot find a will to live, please take action",
			buttons: {
				'NOW': function (button) {
					window.location="https://www.github.com/torinturner"
				},
				'Cancel': function (button) {
					warning2()
				}
			}
		}).render()
	}
	
	
	window.setTimeout(function () {
		var dialog = new WIN95.dialogBox()
	dialog.set({
		ID: WIN95.getUniqueID(),
		image: 'url_105',
		title: 'Instagram',
		text: 'Check out my Instagram.',
		buttons: {
			'HERE': function (button) {
				window.location="https://www.instagram.com/torinturner"
			},
			'Cancel': function (button) {
				warning3()
			}
		}
	}).render()
	}, 2000)

	window.setTimeout(function () {
		$('[data-icon=myComputer]').dblclick()
		WIN95.explorerIcons = {}

		WIN95.explorerIcons.A = new WIN95.icon()
		WIN95.explorerIcons.A.set({
			ID: 'driveA',
			image: 'shell32_8',
			text: 'Removable Disk (A:)'
		}).render('.explorerContents')

		WIN95.explorerIcons.C = new WIN95.icon()
		WIN95.explorerIcons.C.set({
			ID: 'driveC',
			image: 'shell32_9',
			text: '(C:)'
		}).render('.explorerContents')
	}, 1000)

})