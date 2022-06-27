import type { RequestHandler } from ".svelte-kit/types/src/routes/todos/__types";


export const post : RequestHandler =  async () => {
	return {
		status: 200,
		body: {}
	};
}
