import type { RequestHandler } from '@sveltejs/kit';

// src/routes/api/auth/user.ts
export const post: RequestHandler = ({ locals }) => {
	const { user, accessToken, error: { status, message } } = locals;
    
	return {
        status: 200,
		body: {
			// Note that the User interface is not compatible with Svelte's JSONObject
			// type, so it's necessary to serialize the object ourselves.
            user: JSON.stringify(user),
			accessToken,
			error: { status, message }
		}
	};
};
