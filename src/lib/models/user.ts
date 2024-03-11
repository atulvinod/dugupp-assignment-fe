
export class User {
    profileImageSrc: string;
    name: string;
    description: string;
    websiteURL:string;
    companyName:string; 
    jobTitle:string;
    companyImage:string;
    constructor(name: string, description: string, profileImageSrc: string, websiteURL:string, companyName:string, jobTitle:string, companyImage:string) {
        this.name = name;
        this.description = description;
        this.profileImageSrc = profileImageSrc;
        this.websiteURL = websiteURL;
        this.companyImage =companyImage;
        this.companyName = companyName;
        this.jobTitle = jobTitle;
    }
}