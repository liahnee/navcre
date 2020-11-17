import React from 'react';
import '../stylesheets/home.css';

import BannerA from '../components/bannerA';
import BannerB from '../components/bannerB';
import Demo from '../components/demoForm';
import Block from '../components/home/picture-block';

import CRELogo from '../assets/logos/crelogo.png';
import CRELogoS from '../assets/logos/navilogosub.png';
import Macs from '../assets/home/mac_img.png';
import Idea from '../assets/home/idea-1.png';
import Webs from '../assets/home/navwebimg.png';
import Cloud from '../assets/home/cloud-computing_2.png';

import Buildings from '../assets/home/buildings_orig.png';
import Brokers from '../assets/home/brokers_orig.png';
import Tenant from '../assets/home/tenant_orig.png';
import Construction from '../assets/home/const_orig.png';
import DemoBg from '../assets/home/main_bg.jpg';

const Home = (props) => {
	return (
		<div className="home">
			<div className="home-main">
				<div className="strip">
					<img id="crelogo" src={CRELogo} alt="NavigatorCRE logo" />
					<p>Commercial Real Estate Reimagined</p>
					<div className="strip-box">
						<p>Business Intelligence</p>
						<p>Built for CRE</p>
					</div>
				</div>
			</div>
			<div className="cre-info" id="cre-intro">
				<div className="bannerAB-top" />
				<BannerA
					img={bannerA.img}
					alt={bannerA.alt}
					title={bannerA.title}
					icon={bannerA.icon}
					text={bannerA.text}
				/>
				<div className="bannerAB-divider" />
				<BannerB
					img={bannerB.img}
					alt={bannerB.alt}
					title={bannerB.title}
					icon={bannerB.icon}
					text={bannerB.text}
				/>
				<div className="bannerAB-bottom" />
			</div>
			<div className="builtfor">
				<section className="content">
					<div className="builtfor-title-wrap">
						<img id="builtfor-logo" src={CRELogoS} alt="logo" />
						<span className="builtfor-title">Built for All Asset Classes and Operations</span>
					</div>
                    <div className="block-container">
					{blocks.map((block, idx) => {
						const key = 'block ' + idx;
						return <Block img={block.img} title={block.title} text={block.text} key={key} />;
					})}

                    </div>
                    <p id="builtfor-p">Office | Industrial | Multifamily | Retail | Land</p>
				</section>
			</div>
			<div id="home-demo">
				<Demo />
			</div>
		</div>
	);
};

const bannerA = {
	title: 'The Art of Intelligence',
	img: Macs,
	alt: 'Mac computers',
	text:
		'NavigatorCRE is built on the state-of-the-art Navigator Cloud Platform enabling you to connect all of your data and intelligence into a single source of truth to drive efficiency, speed and decision making about your CRE portfolio.',
	icon: Idea,
	reverse: false
};
const bannerB = {
	title: 'Cloud Data Management Suite',
	img: Webs,
	alt: 'Screenshots of NavigatorCRE website',
	text:
		'NavigatorCRE simplifies the data management of your CRE data with a smart Data Warehouse suite behind the scenes that can ingest data from nearly any source, structured or unstructured. The Platform also collapses the functionality of mapping, reporting, dashboards, data collaboration tools and is customized and white-labeled to your business and brand.',
	icon: Cloud,
	reverse: true
};

const blocks = [
	{
		img: Buildings,
		title: (
			<p className="block-title">
				Owner Operators/ <span className="block-red">Landlords</span>
			</p>
		),
		text:
			'Total oversight of your global portfolio, property specs, acquisitions and dispositions and state-of-the-art rent roll analysis.'
	},
	{
		img: Brokers,
		title: (
			<p className="block-title">
				Brokerage/ <span className="block-red">Capital Markets</span>
			</p>
		),
		text:
			'Market intelligence, sales comps, lease comps, deal tracking, market trends and robust data driven presentations to clients.'
	},
	{
		img: Tenant,
		title: (
			<p className="block-title">
				Occupiers/ <span className="block-red">Tenants</span>
			</p>
		),
		text:
			'Track your occupied portfolio, net lease obligation, workplace utilization, work orders and growth strategy.'
	},
	{
		img: Construction,
		title: (
			<p className="block-title">
				Construction/ <span className="block-red">Development</span>
			</p>
		),
		text: 'Consolidate your project status, costs, budgets, forecasting, return on cost and market conditions.'
	}
];

export default Home;
