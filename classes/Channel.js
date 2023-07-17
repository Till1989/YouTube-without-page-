export class Channel
{
 name;
 videos=[];
 subscribers=[];
 constructor (name)
  {
   this.name=name;
  }
 AddVideo(Video)
  {
   this.videos.push(Video);
  }
 RemoveVideo(name)
  {
    this.videos.splice(this.videos.findIndex(vid => vid.name === name),1);
  }  
 Subscribe(user)
 {
  if(user.isAnon==false)
  {
    this.subscribers.push(user);
  }
 }
 Unsubscribe(user)
 {
  this.subscribers.splice(this.subscribers.findIndex(subscr => subscr.name === user.name),1);
 }

}