import React, { useState, useRef } from 'react';

const Collapse = ({ title, content }) => {
	/* This is setting the initial state of the collapse. */
	const [setActive, setActiveState] = useState('');
	/* This is setting the initial height of the collapse to 0px. */
	const [setHeight, setHeightState] = useState('0px');
	/* This is setting the initial state of the rotate class. */
	const [setRotate, setRotateState] = useState('fa-solid fa-chevron-down');

	/* This is setting the contentCollapse to a ref. This is used to get the height of the content. */
	const contentCollapse = useRef(null);

	/**
	 * The function toggles the collapse by changing the active state, the height state and the rotate
	 * state
	 */
	const toggleCollapse = () => {
     
		setActiveState(setActive === '' ? 'active' : '');
		setHeightState(
			setActive === 'active'
				? '0px'
				: `${contentCollapse.current.scrollHeight}px`
		);
		setRotateState(
			setActive === 'active' ? 'fa-solid fa-chevron-down' : 'fa-solid fa-chevron-up'
		);
	};

	return (
		<div className="collapse__dropdown__container">
            <div
                className={`collapse__dropdown__title ${setActive}`}
                onClick={toggleCollapse}
            >
                <h2>{title}</h2>
                <i className={`${setRotate}`}></i>
            </div>

			<div
				ref={contentCollapse}
				style={{ maxHeight: `${setHeight}` }}
				className="collapse__dropdown__content"
			>
                <div>{content}</div>
			</div>
		</div>
	);
};

export default Collapse;