import React from 'react';
import '../stylesheets/profeatures.css';

import Header from '../components/header';
import Block from '../components/profeatures/block';

import ImgOne from '../assets/profeatures/placeit-1-1-orig_orig.png';
import ImgTwo from '../assets/profeatures/placeit-1_2_orig.png';
import ImgThree from '../assets/profeatures/placeit-3_1_orig.png';
import ImgFour from '../assets/profeatures/placeit-4.png';

const ProFeatures = (props) => {
	return (
		<div className="profeatures">
			<Header title="PRO FEATURES" parent={'profeatures'} />
            <div className="block-wrapper">
                {blocks.map((block, idx) => {
                    const {img, imgDir, title, texts} = block;
                    return (
                        <Block key={idx} img={img} imgDir={imgDir} title={title} texts={texts} />
                    )
                })}
            </div> 
		</div>
	);
};

const blocks = [
	{
		img: ImgOne,
		imgDir: 'right',
		title: '​Owners/ Asset Managers',
		texts: [
			{
				subtitle: 'More Informed Decisions',
				text: 'Owners and asset managers can instantly gain a comprehensive understanding of and visibility into any vertical market segment to identify market trends, dislocations, anomalies and relevant comparisons that drive decisions and create value. All told, these capabilities translate directly into less risk, fewer surprises and high performance.  Our patented CREIQ(TM) Data visualization engine unlocks portfolio insights in seconds and helps you make decisions with speed and accuracy.'
			},
			{
				subtitle: 'Optimize Operations',
				text: 'The real-time visibility into relevant performance indicators enables the comparison of results between managers and competitors to understand market-share and relative performance. Results include the opportunity to track and optimize rents, capital projects, operating expense and net revenue to drive higher value. '
			},
			{
				subtitle: 'Reduce Process Time',
				text: 'Instantly review the status of individual buildings and entire portfolios, to answer relevant questions and develop effective action plans. Consolidate data into clear formats and relevant analytics to align the understanding of the entire team. With the integration of core programs then enables efficient execution of acquisition, management and disposition processes. '
			}
		]
	},
	{
		img: ImgThree,
		imgDir: 'left',
		title: 'Brokers / Advisors',
		texts: [
			{
				subtitle: 'Team Alignment',
				text: 'Align the efforts of all team members to be most effective together, serving vertically defined corporate and portfolio clients market to market. Save time with a single platform utilized by the whole team with versatile dashboard analytics.'
			},
			{
				subtitle: 'Business Development Advantage',
				text: 'Create a business development advantage with rapid answers to core questions:  Find site opportunities based on market trends, anomalies and changes. Present results based on relevant lease comps, sales comps, values, velocity, availabilities and rent rates. '
			},
			{
				subtitle: 'Revenue Enhancement',
				text: 'Process more transactions with reduced cycle time. Demonstrate integral knowledge to the success of sellers, buyers, tenants, developers and owners. Generate competitive distinction due to prowess within uniquely defined vertical market segments.'
			}
		]
	},
	{
		img: ImgTwo,
		imgDir: 'right',
		title: 'Researchers / Appraisers',
		texts: [
			{
				subtitle: '​Hive Mind Production',
				text:
					'​Empower teams to generate valuable data in various locations enabling rapid multi-market analysis, site selection, portfolio research and detailed studies run simultaneously.  NavigatorCRE is the one platform to collect all intelligence and analysis resulting in the alignment of every contributor. '
			},
			{
				subtitle: 'Live Analysis',
				text:
					'Develop live market tours and analysis to help clients and brokerage teams in their real estate objectives and strategies. Create interactive presentations with efficacy and clarity, using one streamline system to deliver vital results. '
			},
			{
				subtitle: 'Strategic Research​',
				text:
					"The strategic value of research is elevated due to NavigatorCRE's ability to reflect an accurate market overview. Providing teams the ability to identify specific opportunities for acquisition, disposition, relocation, development, ​renovation or refinance."
			}
		]
	},
	{
		img: ImgFour,
		imgDir: 'left',
		title: 'Property Managers',
		texts: [
			{
				subtitle: 'PMconnect',
				text:
					'Connect directly to your PM Softwares like Yardi, MRI and others to have a seamless look at your current portfolio metrics, stats, occupancy and rent rolls, in a live and easy to use interface.'
			},
			{
				subtitle: 'Inventory Statistics ',
				text:
					'See all properties in your geographic market area, segmented by property type and sorted for occupancy status, rents, user type, ownerships, last sale pricing and market cap rates. '
			},
			{
				subtitle: 'Category Expertise',
				text:
					'Search for competitive positioning of like kind buildings and availabilities. Analyze market share in respect to Property Managers and other service providers and vendors.'
			},
			{
				subtitle: 'Accurate Reports',
				text:
					'Create Owner reports that help your clients and prospects understand the market and know their position relative to other properties or projects like theirs. '
			}
		]
	}
];

export default ProFeatures;
