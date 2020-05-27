import React from 'react';

const CommentsCount = ({count}) => {
	return (
		<h3 className="text-center">
			Количество комментариев - {count}
		</h3>
	);
};

export default CommentsCount;
