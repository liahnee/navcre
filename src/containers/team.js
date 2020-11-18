import React, { useState } from 'react';
import '../stylesheets/team.css';

import Header from '../components/header';
import Profile from '../components/team/profile';

import Stars from '../components/stars';

import Group from '../assets/team/group_2.png';
import Logo from '../assets/logos/crelogo.png';
import TO from '../assets/team/to-headshot_orig.png';
import KS from '../assets/team/shtof.png';
import RJ from '../assets/team/russ.png';
import LJ from '../assets/team/larry2.png';

const Team = (props) => {
	const [ selected, setSelected ] = useState(list[0]);

	const onClick = (prop) => {
		setSelected(prop);
		return;
	};

	const highlight = ind => {
		console.log("highlight ind", ind);
		console.log("highlight selected", selected);
		if (selected == ind) {
			return 'highlight'
		};
	};

	return (
		<div className="team">
			<Header title="TEAM" parent={'team'} />
			<div className="team-intro content">
				<img src={Group} />
				<div>
					<p>
						NavigatorCRE founders are leading experts in commercial real estate investment strategy focused
						on aligning successful teams for the benefit of their clients. Their mission to deliver
						streamline processes and innovative technology to all real estate professionals has been
						achieved through the creation of NavigatorCRE’s comprehensive platform. Together they formed a
						dynamic team to launch the most significant influencer in portfolio management for the entire
						real estate industry.
					</p>
					<p>
						Collectively, the Navigator founders have relationships with a large segment of the target
						market user community. They use NavigatorCRE successfully in their own practice and thoroughly
						understand how the system functions in order for it to be of maximum value for the success of
						each NavigatorCRE customer.
					</p>
				</div>
			</div>
			<div className="team-exect">
					<Stars />
					<div className="team-title content">
						<img src={Logo} alt="Navigator CRE logo" />
						<h2>EXECUTIVE TEAM</h2>
					</div>
					<div className="team-pictures content">
						{list.map((ind, idx) => {
							return (
								<div className={`img-wrap ${highlight(ind)}`} onClick={() => onClick(ind)} key={idx}>
									<img src={ind.src} alt={ind.name} />
								</div>
							);
						})}
					</div>
					<Profile ind={selected} />
			</div>
		</div>
	);
};

const list = [
	{
		src: TO,
		name: 'Taylor Odegard',
		phone: '(206) 890-3364',
		email: 'taylor@navigatorcre.com',
		twitter: '@therealnavigatr',
		title: 'Chief Executive Officer (CEO), Founder, Chairman | Head of Innovation',
		text:
			"As Chief Executive Officer (CEO), and Head of Innovation, Taylor leads the NavigatorSRVS and CRE team with a focus on building the ultimate industry platform for data analytics focused on Navigator's core verticals of Commercial Real Estate, Fintech & Health/Human Services. Taylor oversees the core development of the Navigator platform services and enlightens the market of the most leading edge software services and practices to enhance the industry as a whole. Taylor is the original visionary behind NavigatorCRE. He started developing innovative technology applications while gaining a Real Estate and Finance degree from USC. Nationally recognized as a pioneer in real estate technology innovation, driving significant transactions and success for his clients. Over the past decade he has refined best practices for data visualization and property research, while running his own web development company and collaborating with commercial real estate firms. His ability to develop proprietary code and digital functionality allowed him to lead a top-tier NavigatorCRE development team to create a revolutionary platform that significantly elevates performance levels of Commercial Real Estate professionals through the digitization of processes related to business development, market research, valuation, site acquisition, property and asset management through final disposition.​"
	},
	{
		src: KS,
		name: 'Kevin Shtofman',
		phone: '(214) 244-0228',
		email: 'kevin@navigatorcre.com',
		twitter: '',
		title: 'Chief Operations Officer (COO) | Head of Enterprise Engagement',
		text:
			'As Chief Operations Officer (COO), and Head of Enterprise Engagement, Kevin leads the NavigatorSRVS and CRE Operations and Deployments teams with a focus on client success at the enterprise, scaling navigator across the industry and operational success of the Navigator platform inside the tech stack of modern day asset management, brokerage and CRE enterprises. Prior to joining Navigator, Kevin’s 16-year career includes positions at Deloitte, EY, and Morgan Stanley. Most recently he served as a Global Technology Strategy Lead at Deloitte, advising real estate developers, operators, and investors, with clients across 4 continents. Kevin is recognized as one of the leading commercial real estate tech executives in the industry and a noted speaker, author and blogger within the growing Proptech sector. He has spoken at conferences around the world on next generation real estate technologies like Machine Learning, Cognitive Automation, and Blockchain. He holds a BA in Economics from The University of Texas at Austin, an MBA in Finance and Entrepreneurship from Southern Methodist University, and an Executive Certificate in Machine Learning from Massachusetts Institute of Technology.'
	},
	{
		src: RJ,
		name: 'Russ Johnson',
		phone: '(206) 850-7675',
		email: 'russ@navigatorcre.com',
		twitter: '',
		title: 'Chief Strategy Officer (CSO), Co-Founder | Head of Partnerships',
		text:
			'As Chief Strategy Officer (CSO), Russ leads the strategy and growth initiatives at NavigatorSRVS and CRE with a focus on partner verticals & investor relations. His overarching approach of company directives and initiates focuses on alignment in the tech ecosytem to create synergy of networks teaming with networks, companies teaming with companies and teams teaming with teams.Russ brings a 30 year history in business and entrepreneurial experience including 20 years with CBRE as a market leader and Senior VP focused in corporate services, CEO of a private cloud managed services company, founding director of a graduate school of business and leadership, managing partner in a diversified investment company and director of a private family foundation. While at CBRE, he co-Founded the Corporate Finance Group and pioneered the development of national industry practice groups. Early in his career, Russ recognized the need within the commercial real estate industry for the alignment and integration of big data, programs, tools and teams to create value for owners, advisors and vendors. Russ is now committed to make NavigatorCRE widely available through a robust and affordable SAAS offering, for the entire CRE community of industry professionals.'
	},
	{
		src: LJ,
		name: 'Larry Johnson',
		phone: '(206) 601-2414',
		email: 'larry@navigatorcre.com',
		twitter: '',
		title: 'Chief Financial Officer (CFO) | Head of Finance',
		text:
			'Larry Johnson is the CFO at NavigatorCRE in charge of the accounting, financial and growth planning with our executive team. Larry has extensive financial experience with hosted software and technology solutions at publicly traded companies (IDX Software and TeleCommunication Systems) as well as cloud-based PaaS/SaaS company (Fuse Networks).  Larry is a former CPA with 4+ years of experience at Deloitte & Touche and received his Bachelors in Business Administration (accounting concentration) from University of Washington, Fosters.​'
	}
];

export default Team;

// hover image to show prev texts on bottom column
// click to fixate
//mobile picture sbecomes thumbnail
