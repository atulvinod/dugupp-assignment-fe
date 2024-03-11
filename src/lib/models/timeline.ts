
export enum TimelineEventType {
    POST,
    JOB_CHANGE,
}

export enum JobEventType {
    JOINED = "Joined",
}

export class TimelineBase {
    eventType: TimelineEventType;
    eventDate: string;
    constructor(eventType: TimelineEventType, eventDate: string) {
        this.eventDate = eventDate;
        this.eventType = eventType;
    }
}

export class Post {
    postImageSrc: string;
    postTitle: string;
    constructor(postImageSrc: string, postTitle: string) {
        this.postImageSrc = postImageSrc;
        this.postTitle = postTitle;
    }
}

export class PostEvent extends TimelineBase {
    posts: Post[];
    constructor(eventDate: string, posts: Post[]) {
        super(TimelineEventType.POST, eventDate);
        this.posts = posts;
    }
}

export class JobEvent extends TimelineBase {
    companyName: string;
    companyLogoSrc: string;
    companyLocation: string;
    jobRole: string;
    jobLocation?: string;
    jobType: "Full-Time" | "Part-Time";
    jobEventType:JobEventType
    constructor(obj:{
        eventDate: string,
        jobEventType:JobEventType,
        companyName: string,
        companyLogoSrc: string,
        jobRole: string,
        jobType: "Full-Time" | "Part-Time",
        companyLocation: string,
        jobLocation?: string,}
    ) {
        super(TimelineEventType.JOB_CHANGE, obj.eventDate);
        this.companyName = obj.companyName;
        this.companyLogoSrc = obj.companyLogoSrc;
        this.jobRole = obj.jobRole;
        this.jobLocation = obj.jobLocation;
        this.companyLocation = obj.companyLocation;
        this.jobType = obj.jobType;
        this.jobEventType = obj.jobEventType
    }
}
