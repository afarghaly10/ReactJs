import { useState } from "react";
import { EXAMPLES } from "../data.js";
import TabButton from "./TabButton.jsx";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";

export default function Examples() {
	const [selectedTab, setSelectedTab] = useState();

	function handleTabSelect(selectedTabHeader) {
		setSelectedTab(selectedTabHeader);
	}

	let tabContent = <p>Please Select a topic</p>;

	if (selectedTab) {
		tabContent = (
			<div id="tab-content">
				<h3>{EXAMPLES[selectedTab].title}</h3>
				<p>{EXAMPLES[selectedTab].description}</p>
				<pre>
					<code>{EXAMPLES[selectedTab].code}</code>
				</pre>
			</div>
		);
	}

	return (
		<Section title="Examples" id="examples">
			<Tabs
				buttons={
					<>
						<TabButton
							isSelected={selectedTab === "components"}
							onClick={() => handleTabSelect("components")}
						>
							Components
						</TabButton>
						<TabButton
							isSelected={selectedTab === "jsx"}
							onClick={() => handleTabSelect("jsx")}
						>
							JSX
						</TabButton>
						<TabButton
							isSelected={selectedTab === "props"}
							onClick={() => handleTabSelect("props")}
						>
							Props
						</TabButton>
						<TabButton
							isSelected={selectedTab === "state"}
							onClick={() => handleTabSelect("state")}
						>
							State
						</TabButton>
					</>
				}
			>
				{tabContent}
			</Tabs>
		</Section>
	);
}
