<script>
    import myRouteLink from "../Actions/myRouteLink.js";

    import logo from '../../logo.jpg';
</script>

<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src={logo} alt="" width="30" height="24" class="d-inline-block align-text-top">
                Booleano
            </a>
        </div>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link my-navbar-link" href="/tickets" use:myRouteLink>Tickets</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link my-navbar-link active" href="/" use:myRouteLink>Exercises</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link my-navbar-link" href="/settings" use:myRouteLink>Settings</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link my-navbar-link" href="/connect" use:myRouteLink>Connect</a>
                </li>
            </ul>
        </div>
    </div>
</nav>