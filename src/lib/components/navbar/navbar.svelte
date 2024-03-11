<script>
    import './navbar.style.css';
    import navbarLogo from '$lib/assets/navbar-logo.svg'
    import AppButton from '../app-button/app-button.svelte';
    import homeIcon from '$lib/assets/home.svg';
    import storyIcon from '$lib/assets/story.svg';
    import learnIcon from '$lib/assets/learn.svg';
    import {PlusSquare} from "lucide-svelte"
    import logoText from '$lib/assets/logo_text.svg'
    import NavbarProfile from '../navbar-profile/navbar-profile.svelte';

</script>
<nav class="navbar flex items-center justify-between">
    <div class="flex ">
        <img src={navbarLogo} alt=""/>        
    </div>
    <div class="flex items-center">
        <AppButton text={"Home"} onClick={()=>alert('asdf')}> 
            <img src={homeIcon} alt="">
        </AppButton>
        <AppButton text={"Explore"} onClick={()=>alert('asdf')}> 
            <img src={storyIcon} alt="">
        </AppButton>
        <AppButton text={"Learn"} onClick={()=>alert('asdf')}> 
            <img src={learnIcon} alt="">
        </AppButton>
        <AppButton text={"Post"} onClick={()=>{}} variant={"cta"}>
            <PlusSquare class="h-4 w-4 font-normal"/>
        </AppButton>
        <div>
            <NavbarProfile/>
        </div>
    </div>
</nav>