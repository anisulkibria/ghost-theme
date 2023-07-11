import Image from 'next/image'

export default function Home() {
  return (
    <>

	<span className="lay" onclick="toggleNavbar()" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav"
		role="presentation"></span>
	<header className="header">
		<div className="container">

			<nav className="navbar navbar-expand-lg navbar-light">

				<a className="navbar-brand dual-logo dark-logo" href="https://themefantome.com/" title="Theme Fantome">
					<Image width={94} height={50} className="logo-image align-top" src="/img/Theme-Fantome-white.png" alt="Theme Fantome" />
				</a>

				<a className="navbar-brand dual-logo light-logo" href="https://themefantome.com/" title="Theme Fantome">
					<Image width={94} height={50} className="logo-image align-top" src="/img/Theme-Fantome-Black.png" alt="Theme Fantome" />
				</a>

				<a className="navbar-brand single-logo" href="https://themefantome.com/" title="Theme Fantome">
					<Image width={94} height={50} className="logo-image align-top main-logo" src="/img/Theme-Fantome-Black.png" alt="Theme Fantome" />
				</a>

				<button onclick="toggleNavbar()" className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarNav">

					<ul className="navbar-nav m-auto primary-nav">

						<li className="nav-item user-toggle dark-mode js-mode-toggle">
							<span className="dark-light-toggle-icon" aria-hidden="true"></span>
						</li>

						<li className="nav-item nav-home active" role="presentation">
							<a className="nav-link" href="https://themefantome.com/">
								<span>Home</span>
							</a>
						</li>
						<li className="nav-item nav-about" role="presentation">
							<a className="nav-link" href="#">
								<span>About</span>
							</a>
						</li>

						<li className="nav-item dropdown">
							<a className="nav-link dropdown-toggle" href="https://themefantome.com/#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">•••</a>
							<ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink"></ul>
						</li>

					</ul>

				</div>

			</nav>

		</div>
	</header>

	<section className="main-content">

		<div className="container">

			<h1 className="text-center mt-5 text-sucess">Showcase of Custom Ghost Themes</h1>

			<div className="posts-block-big">
				<div className="row">
					<div className="col-md-6 content-item">

						<div className="item">
							<a href="#">
								<Image width={536} height={390} className="img-fluid w-100 br-20 feature-image border" src="/img/colore-1.png" alt="post-image" />
                </a>
							<div className="tags">
								<a className="text-decoration-none" href="#">Ghost Theme</a>
							</div>

							<div className="title">
								<h2>
									<a className="text-decoration-none" href="#">Colore Ghost theme</a>
								</h2>
							</div>

							<div className="excerpt">
								<p>Colore is a Custom Ghost theme. It is a very clean and simple premium Ghost theme. Contact me to develop a similar ghost theme for your blog</p>
							</div>

						</div>

					</div>
					<div className="col-md-6 content-item">

						<div className="item">
							<a href="#">
								<Image width={536} height={390} className="img-fluid w-100 br-20 feature-image border" src="/img/limite-1.png" alt="post-image" />
							</a>

							<div className="tags">
								<a className="text-decoration-none" href="#">Ghost Theme</a>
							</div>

							<div className="title">
								<h2>
									<a className="text-decoration-none" href="#">Limite Ghost Theme</a>
								</h2>
							</div>

							<div className="excerpt">
								<p>Limite is a Custom Ghost theme. It is a very clean and simple premium Ghost theme. Contact me to develop a similar ghost theme for your blog</p>
							</div>

						</div>

					</div>
					<div className="col-md-6 content-item">

						<div className="item">
							<a href="#">
								<Image width={536} height={390} className="img-fluid w-100 br-20 feature-image border" src="/img/agreeable-1.png" alt="post-image" />
							</a>

							<div className="tags">
								<a className="text-decoration-none" href="#">Ghost Theme</a>
							</div>

							<div className="title">
								<h2>
									<a className="text-decoration-none" href="#">Agreable Ghost Theme</a>
								</h2>
							</div>

							<div className="excerpt">
								<p>Agreable is a Custom Ghost theme. It is a very clean and simple premium Ghost theme. Contact me to develop a similar ghost theme for your bl</p>
							</div>

						</div>

					</div>
					<div className="col-md-6 content-item">

						<div className="item">
							<a href="#">
								<Image width={536} height={390} className="img-fluid w-100 br-20 feature-image border" src="/img/facile.png" alt="post-image" />
							</a>

							<div className="tags">
								<a className="text-decoration-none" href="#">Ghost Theme</a>
							</div>

							<div className="title">
								<h2>
									<a className="text-decoration-none" href="#">Facile Ghost Theme</a>
								</h2>
							</div>

							<div className="excerpt">
								<p>Facile is a Custom Ghost theme. It is a very clean and simple premium Ghost theme. Contact me to develop a similar ghost theme for your blog.</p>
							</div>

						</div>

					</div>
					<div className="col-md-6 content-item">

						<div className="item">
							<a href="#">
								<Image width={536} height={390} className="img-fluid w-100 br-20 feature-image border" src="/img/noir.png" alt="post-image" />
							</a>

							<div className="tags">
								<a className="text-decoration-none" href="#">Ghost Theme</a>
							</div>

							<div className="title">
								<h2>
									<a className="text-decoration-none" href="#">Noire Ghost Theme</a>
								</h2>
							</div>

							<div className="excerpt">
								<p>Noire is a Custom Ghost theme. It is a black premium Ghost theme. Contact me to develop a similar ghost theme for your blog.</p>
							</div>

						</div>

					</div>
					<div className="col-md-6 content-item">

						<div className="item">
							<a href="#">
								<Image width={536} height={390} className="img-fluid w-100 br-20 feature-image border" src="/img/leger-1.png" alt="post-image" />
							</a>

							<div className="tags">
								<a className="text-decoration-none" href="#">Ghost Theme</a>
							</div>

							<div className="title">
								<h2>
									<a className="text-decoration-none" href="#">Leger Ghost Theme</a>
								</h2>
							</div>

							<div className="excerpt">
								<p>Leger is a Custom Ghost theme. It is a very clean and simple premium Ghost theme. Contact me to develop a similar ghost theme for your blog.</p>
							</div>

						</div>

					</div>
				</div>
			</div>

		</div>

	</section>

	<footer className="footer">
		<div className="container">
			<div className="footer-wrapper">

				<div className="social-nav">
					<ul className="nav justify-content-center">

						<li className="nav-item">
							<a className="nav-link" href="https://www.facebook.com/anisulkibria" target="_blank" rel="noopener noreferrer">
								<i className="fab fa-facebook-square"></i>
							</a>
						</li>

						<li className="nav-item">
							<a className="nav-link" href="https://twitter.com/shaheenbd" target="_blank" rel="noopener noreferrer">
								<i className="fab fa-twitter"></i>
							</a>
						</li>

					</ul>
				</div>

				<div className="secondary-nav">
					<ul className="nav justify-content-center">

						<li className="nav-data-privacy nav-item">
							<a className="menu-item-data-privacy nav-link" href="#">Data &amp; privacy</a>
						</li>
						<li className="nav-contact nav-item">
							<a className="menu-item-contact nav-link" href="#">Contact</a>
						</li>
						<li className="nav-contribute nav-item">
							<a className="menu-item-contribute nav-link" href="#">Contribute →</a>
						</li>

					</ul>
				</div>

				<div className="text-center small copyright">
					<p>© 2023 Theme Fantome - All Right Reserved</p> 
          <p>Published with <a href="https://ghost.org/">Ghost</a></p>
				</div>

			</div>
		</div>
	</footer>
    </>
  )
}
