<script>
    import DefaultLayout from "../Layouts/DefaultLayout.svelte";
    import {onMount} from "svelte";
    import Spinner from "./Spinner.svelte";
    import Main from "../Pages/Main.svelte";

    export let config = null

    let currentRoute = '/'

    let showSpinner = false

    const store = localStorageHelper();

    if(!!config) {
        // localStorage.setItem('config', config)
        store.config = config
    }

    let qsData = {}

    function parseQuery(queryString) {
        var query = {};
        var pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&');
        for (var i = 0; i < pairs.length; i++) {
            var pair = pairs[i].split('=');
            query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
        }
        return query;
    }

    onMount(() => {
        document.addEventListener('route:click', ({ detail }) => {
            const { href: hrefQs } = detail

            console.log('route:link received', detail)

            const href = hrefQs.split('?')[0]

            const qs = hrefQs.split('?')[1]

            console.log('Querystring is: ', qs)

            if(!!qs) {
                qsData = parseQuery(qs)


                console.log('Querystring data is: ', qsData)
            }

            showSpinner = true

            setTimeout(() => {
                showSpinner = false

                currentRoute = href
            }, 500)
        })
    })
</script>

<DefaultLayout>
    {#if showSpinner}
        <div class="row mb-3 text-center">
            <Spinner text="Loading..." />
        </div>
    {:else}
        {#if currentRoute === '/'}
            <Main config={config} {...qsData} />
        {:else}
            <h1>404</h1>
            <h2>Page Not Found</h2>
        {/if}
    {/if}
</DefaultLayout>

