<script>
	import TextSection from '../components/TextSection.svelte';
</script>

<svelte:head>
	<title>The Game Organiser</title>
	<meta name="description"
				content="Keep track of your board game collection, share your collection with friends, and arrange board game events where attendees can vote on which board games to play." />
</svelte:head>

<TextSection>
	<h1 slot="header">
		The Game Organiser
	</h1>
	<main slot="main">
		<p>
			Welcome to the game organiser website, where you and your friends can store lists of games, including those you
			own and those you want to buy in a wishlist. You can share your collections with friends, rate the games, and note
			down how many players is best for each game.
		</p>
		<p>
			On top of creating collections, you can arrange events between you and your friends where you can create a poll on
			available days to find when works best for you. Once selected you can discuss which games you would like to play
			that day. If your friends have made their collections "public" or "shared with friends" you can browse through
			their collection and suggest games for that day and request the friend brings it with them.
		</p>
		<p>
			The website is currently under development and in a private alpha phase. If you would like to be part of this
			alpha then complete the form below, we promise we will only use your email address to invite you to the alpha
			test.
		</p>
	</main>
</TextSection>

<TextSection>
	<h2 slot="header">
		Sign up for the private alpha test
	</h2>
	<main slot="main">
		<p>
			Please leave your name and email address below if you wish to sign up for the private alpha test.
		</p>
		<p>
			CURRENTLY DISABLED
		</p>
	</main>
</TextSection>

<style>

</style>
