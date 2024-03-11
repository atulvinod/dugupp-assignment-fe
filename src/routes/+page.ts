import krishnaKiranImg from "$lib/assets/krishna-kiran.png";
import post1Img from "$lib/assets/post1img.png";
import post2Img from "$lib/assets/post2img.png";
import post3Img from "$lib/assets/post3img.png";
import post4Img from "$lib/assets/post4img.png";
import duggupSocialImg from "$lib/assets/dugupp-social-icon.svg";
import betterUpSocialImg from "$lib/assets/betterhelp-social-icon.svg";
import { User, Post, PostEvent, TimelineBase, TimelineEventType,JobEvent, JobEventType } from "../lib/models";

export function load() {
    const response: { user?: User | null; timeline: TimelineBase[] } = {
        user: null,
        timeline: [],
    };
    response.user = new User(
        "Krishna Kiran",
        "Co-Founder and CEO at Duggup - Social network for people in tech. Ex-Amazon Head of Engineering. I write hot-takes on building a business, shipping delightful products and accelerating product and career growth.",
        krishnaKiranImg,
        "",
        "Duggup",
        "Co-Founder and CEO",
        duggupSocialImg,
    );
    response.timeline = [
        new PostEvent("Dec 2023", [
            new Post(
                post1Img,
                "No amount of technology can convert a bad story into a good story"
            ),
            new Post(
                post2Img,
                "Most people don't have original ideas, Here is how Sam Altman, pushes himself to have..."
            ),
        ]),
        new JobEvent({
            eventDate:"Nov 2023",
            jobEventType: JobEventType.JOINED,
            companyName: "Duggup",
            companyLogoSrc:duggupSocialImg,
            jobType: "Full-Time",
            jobRole: "Co-Founder and CEO",
            jobLocation: "Remote",
            companyLocation: "San Francisco Bay Area"
        }),
        new PostEvent("Dec 2023", [
            new Post(
                post3Img,
                'Startup Lesson I am reflecting. Don\'t build for the "average person"'
            ),
            new Post(
                post4Img,
                "Your biggest regrets at 80 will be acts of omission"
            ),
        ]),
        new JobEvent({
            eventDate: "Sep 2022",
            jobEventType: JobEventType.JOINED,
            companyName: "BetterUp",
            companyLogoSrc: betterUpSocialImg,
            jobType: "Full-Time",
            jobRole: "VP Engineering",
            companyLocation:"San Francisco Bay Area",
        }),
    ];
    return response;
}

