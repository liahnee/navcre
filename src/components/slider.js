import React from 'react';
import Slider from 'react-slick';

export default function Slide(props) {
	const { list, highlight, onClick } = props;

	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1
	};
	return (
		<div>
			<Slider {...settings}>
				{/* {list.map((ind, idx) => {
					return (
						<div className={`img-wrap ${highlight(ind)}`} onClick={() => onClick(ind)} key={idx}>
							<img src={ind.src} alt={ind.name} />
						</div>
                    );
				})} */}
				<div>
					<h3>1</h3>
				</div>
				<div>
					<h3>2</h3>
				</div>
				<div>
					<h3>3</h3>
				</div>
				<div>
					<h3>4</h3>
				</div>
				<div>
					<h3>5</h3>
				</div>
				<div>
					<h3>6</h3>
				</div>
				<div>
					<h3>7</h3>
				</div>
				<div>
					<h3>8</h3>
				</div>
				<div>
					<h3>9</h3>
				</div>
			</Slider>
		</div>
	);
}
