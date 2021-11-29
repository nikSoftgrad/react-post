import React from "react";
import classes from './MyModal.module.css';

const MyModal = ({children, active, setActive}) =>{
	const rootClasses = [classes.myModal];

	if(active){
		rootClasses.push(classes.active)
	}

	return (
		<div className={rootClasses.join(' ')} onClick={() => setActive(false)}>
			<div className={classes.myModalContent} onClick={(e) => e.stopPropagation()}>
				{children}
			</div>
		</div>
	)
}

export default MyModal;