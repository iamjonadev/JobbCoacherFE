import { Routes } from '@angular/router';
import { Index } from './pages/index/index';
import { IndexTwo } from './pages/index/index-two/index-two';
import { IndexThree } from './pages/index/index-three/index-three';
import { IndexFour } from './pages/index/index-four/index-four';
import { IndexFive } from './pages/index/index-five/index-five';
import { IndexSix } from './pages/index/index-six/index-six';
import { IndexSeven } from './pages/index/index-seven/index-seven';
import { IndexEight } from './pages/index/index-eight/index-eight';
import { IndexNine } from './pages/index/index-nine/index-nine';
import { IndexTen } from './pages/index/index-ten/index-ten';
import { JobCategories } from './pages/job/job-categories/job-categories';
import { JobGridOne } from './pages/job/job-grid-one/job-grid-one';
import { JobGridTwo } from './pages/job/job-grid-two/job-grid-two';
import { JobGridThree } from './pages/job/job-grid-three/job-grid-three';
import { JobGridFour } from './pages/job/job-grid-four/job-grid-four';
import { JobListOne } from './pages/job/job-list-one/job-list-one';
import { JobListTwo } from './pages/job/job-list-two/job-list-two';
import { JobListThree } from './pages/job/job-list-three/job-list-three';
import { JobListFour } from './pages/job/job-list-four/job-list-four';
import { JobListFive } from './pages/job/job-list-five/job-list-five';
import { JobListSix } from './pages/job/job-list-six/job-list-six';
import { JobDetailOne } from './pages/job/job-detail-one/job-detail-one';
import { JobDetailTwo } from './pages/job/job-detail-two/job-detail-two';
import { JobDetailThree } from './pages/job/job-detail-three/job-detail-three';
import { JobApply } from './pages/job/job-apply/job-apply';
import { JobPost } from './pages/job/job-post/job-post';
import { Career } from './pages/job/career/career';
import { Aboutus } from './pages/aboutus/aboutus';
import { Services } from './pages/services/services';
import { Pricing } from './pages/pricing/pricing';
import { EmployerList } from './pages/employer/employer-list/employer-list';
import { EmployerProfile } from './pages/employer/employer-profile/employer-profile';
import { CandidateList } from './pages/candidate/candidate-list/candidate-list';
import { CandidateProfile } from './pages/candidate/candidate-profile/candidate-profile';
import { CandidateProfileSetting } from './pages/candidate/candidate-profile-setting/candidate-profile-setting';
import { HelpcenterOverview } from './pages/helpcenter/helpcenter-overview/helpcenter-overview';
import { HelpcenterFaqs } from './pages/helpcenter/helpcenter-faqs/helpcenter-faqs';
import { Guides } from './pages/helpcenter/guides/guides';
import { HelpcenterSupport } from './pages/helpcenter/helpcenter-support/helpcenter-support';
import { Blogs } from './pages/blog/blogs/blogs';
import { BlogDetail } from './pages/blog/blog-detail/blog-detail';
import { Login } from './pages/auth/login/login';
import { Signup } from './pages/auth/signup/signup';
import { SignupSuccess } from './pages/auth/signup-success/signup-success';
import { ResetPassword } from './pages/auth/reset-password/reset-password';
import { LockScreen } from './pages/auth/lock-screen/lock-screen';
import { Terms } from './pages/utility/terms/terms';
import { Privacy } from './pages/utility/privacy/privacy';
import { Comingsoon } from './pages/special/comingsoon/comingsoon';
import { Maintenance } from './pages/special/maintenance/maintenance';
import { Error } from './pages/special/error/error';
import { Thankyou } from './pages/special/thankyou/thankyou';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [
    // {'path':'index-one', component:Index},
    {'path':'index-two', component:IndexTwo},
    {'path':'index-three', component:IndexThree},
    {'path':'index-four', component:IndexFour},
    {'path':'index-five', component:IndexFive},
    {'path':'', component:IndexSix},
    {'path':'index-seven', component:IndexSeven},
    {'path':'index-eight', component:IndexEight},
    {'path':'index-nine', component:IndexNine},
    {'path':'index-ten', component:IndexTen},
    {'path':'job-categories', component:JobCategories},
    {'path':'job-grid-one', component:JobGridOne},
    {'path':'job-grid-two', component:JobGridTwo},
    {'path':'job-grid-three', component:JobGridThree},
    {'path':'job-grid-four', component:JobGridFour},
    {'path':'job-list-one', component:JobListOne},
    {'path':'job-list-two', component:JobListTwo},
    {'path':'job-list-three', component:JobListThree},
    {'path':'job-list-four', component:JobListFour},
    {'path':'job-list-five', component:JobListFive},
    {'path':'job-list-six', component:JobListSix},
    {'path':'job-detail-one', component:JobDetailOne},
    {'path':'job-detail-one/:id', component:JobDetailOne},
    {'path':'job-detail-two', component:JobDetailTwo},
    {'path':'job-detail-two/:id', component:JobDetailTwo},
    {'path':'job-detail-three', component:JobDetailThree},
    {'path':'job-detail-three/:id', component:JobDetailThree},
    {'path':'job-apply', component:JobApply},
    {'path':'job-post', component:JobPost},
    {'path':'career', component:Career},
    {'path':'aboutus', component:Aboutus},
    {'path':'services', component:Services},
    {'path':'pricing', component:Pricing},
    {'path':'employer-list', component:EmployerList},
    {'path':'employer-profile', component:EmployerProfile},
    {'path':'employer-profile/:id', component:EmployerProfile},
    {'path':'candidate-list', component:CandidateList},
    {'path':'candidate-profile', component:CandidateProfile},
    {'path':'candidate-profile/:id', component:CandidateProfile},
    {'path':'candidate-profile-setting', component:CandidateProfileSetting},
    {'path':'helpcenter-overview', component:HelpcenterOverview},
    {'path':'helpcenter-faqs', component:HelpcenterFaqs},
    {'path':'helpcenter-guides', component:Guides},
    {'path':'helpcenter-support', component:HelpcenterSupport},
    {'path':'blogs', component:Blogs},
    {'path':'blog-detail', component:BlogDetail},
    {'path':'blog-detail/:id', component:BlogDetail},
    {'path':'login', component:Login},
    {'path':'signup', component:Signup},
    {'path':'signup-success', component:SignupSuccess},
    {'path':'reset-password', component:ResetPassword},
    {'path':'lock-screen', component:LockScreen},
    {'path':'terms', component:Terms},
    {'path':'privacy', component:Privacy},
    {'path':'comingsoon', component:Comingsoon},
    {'path':'maintenance', component:Maintenance},
    {'path':'error', component:Error},
    {'path':'thankyou', component:Thankyou},
    {'path':'contact', component:Contact},
];
