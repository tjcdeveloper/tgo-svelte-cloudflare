<section class="section">
	<header>
		<slot name="header">
			<h1>
				Header
			</h1>
		</slot>
	</header>

	<slot name="main">
		<main>
			<p>
				<strong>Lorem Ipsum</strong> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
			</p>
		</main>
	</slot>
</section>

<style>
	section {
			background-color: var(--color-content-bg);
			margin: 3rem 0 0 3rem;
			padding: 0;

			& header {
					padding: 1rem 1.5rem 0.5rem;
					border-bottom: 2px solid var(--color-theme-1);

					& h1 {
							font-weight: bold;
          }
			}

			& main {
					padding: 1rem 1.5rem;
			}
	}
</style>
