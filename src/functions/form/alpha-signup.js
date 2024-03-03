/**
 * POST /form/alpha-signup
 */
export function onRequestPost(context)
{
	try {
		const formData = context.request.body();
		if (!formData.has('email')) {
			throw new Error('Email is required');
		}
		if (!formData.has('name')) {
			throw new Error('Name is required');
		}


	} catch (error) {
		return {
			status: 500,
			body: {
				error: error.message
			}
		};
	}
}
