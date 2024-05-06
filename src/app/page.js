"use client"

import React, { useEffect } from 'react';

export default function Home() {
	useEffect(() => {
		const panels = document.querySelectorAll('.panel');

		function toggleOpen() {
			this.classNameList.toggle('open');
		}

		function toggleActive(e) {
			if (e.propertyName.includes('flex')) {
				this.classNameList.toggle('open-active');
			}
		}

		panels.forEach((panel) => panel.addEventListener('click', toggleOpen));
		panels.forEach((panel) =>
			panel.addEventListener('transitionend', toggleActive)
		);

		// Cleanup event listeners on unmount
		return () => {
			panels.forEach((panel) =>
				panel.removeEventListener('click', toggleOpen)
			);
			panels.forEach((panel) =>
				panel.removeEventListener('transitionend', toggleActive)
			);
		};
	}, []);

	return (
		<div className="panels hover:cursor-pointer">
			<div className="panel panel1">
				<p>Hey</p>
				<p>Let's</p>
				<p>Dance</p>
			</div>
			<div className="panel panel2">
				<p>Give</p>
				<p>Take</p>
				<p>Receive</p>
			</div>
			<div className="panel panel3">
				<p>Experience</p>
				<p>It</p>
				<p>Today</p>
			</div>
			<div className="panel panel4">
				<p>Give</p>
				<p>All</p>
				<p>You can</p>
			</div>
			<div className="panel panel5">
				<p>Life</p>
				<p>In</p>
				<p>Motion</p>
			</div>
		</div>
	);
}
