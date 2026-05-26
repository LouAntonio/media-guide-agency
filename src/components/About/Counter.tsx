import React, { useEffect, useState, useRef } from "react";
import { useInView } from "framer-motion";

interface CounterProps {
	from: number;
	to: number;
	duration?: number;
	suffix?: string;
}

const Counter: React.FC<CounterProps> = ({ from, to, duration = 2, suffix = "" }) => {
	const [count, setCount] = useState(from);
	const ref = useRef<HTMLSpanElement>(null);
	const inView = useInView(ref, { once: true, margin: "-50px" });

	useEffect(() => {
		if (inView) {
			let startTime: number;
			const step = (timestamp: number) => {
				if (!startTime) startTime = timestamp;
				const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);

				// ease out expo
				const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

				setCount(Math.floor(easeProgress * (to - from) + from));
				if (progress < 1) {
					window.requestAnimationFrame(step);
				}
			};
			window.requestAnimationFrame(step);
		}
	}, [inView, from, to, duration]);

	return (
		<span ref={ref}>
			{count}
			{suffix}
		</span>
	);
};

export default Counter;
