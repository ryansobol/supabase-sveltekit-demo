<script>
	import { Button } from '$lib/components/ui/button';
	import CardContent from '$lib/components/ui/card/card-content.svelte';
	import CardHeader from '$lib/components/ui/card/card-header.svelte';
	import Card from '$lib/components/ui/card/card.svelte';
</script>

<Card>
	<CardHeader>Login</CardHeader>
	<CardContent>
		<Button href="/auth/login/github">Login with GitHub</Button>
	</CardContent>
</Card>
