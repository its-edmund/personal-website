import React from "react";
import Button from "@material-ui/core/Button";
import { useGithubBtnStyles } from "@mui-treasury/styles/button/github";
import { usePushingGutterStyles } from "@mui-treasury/styles/gutter/pushing";

const TestComponent = () => {
	const styles = useGithubBtnStyles();
	const gutterStyles = usePushingGutterStyles();
	return (
		<div className={gutterStyles.parent}>
			<Button classes={styles} variant={"contained"}>
				Default
			</Button>
			<Button classes={styles} variant={"contained"} color={"primary"}>
				Contained
			</Button>
		</div>
	);
};

export default TestComponent;
