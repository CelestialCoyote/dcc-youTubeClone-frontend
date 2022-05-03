import { useState } from 'react';
import axios from 'axios';
import './App.css';
import TitleBar from './components/TitleBar/TitleBar';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';


const App = () => {

    //const [allComments, setAllComments] = useState([]);
    const [currentVideoID, setCurrentVideoID] = useState('');
    const [ytResults, setYtResults] = useState([]);
    const [currentVideoInfo, setCurrentVideoInfo] = useState([]);

    //const allCommentsFetch = async () => {
    //    await axios
    //        .get('http://localhost:3007/api/comments')
    //        .then((res) => setAllComments(res.data));
    //};

    setCurrentVideoInfo(
        {
            "kind": "youtube#videoListResponse",
            "etag": "J7fPCRgS7IAGi9HwnSlR-Du0PiY",
            "items": [
                {
                    "kind": "youtube#video",
                    "etag": "pCjei0U0uTj_czqSxJuMpcWXrUU",
                    "id": "qN9Yor2gEB4",
                    "snippet": {
                        "publishedAt": "2021-02-02T18:25:28Z",
                        "channelId": "UCM8QJkIB3CpBsCSWjvKHBkA",
                        "title": "Siberian Husky Pros And Cons | Should You REALLY Get A SIBERIAN HUSKY?",
                        "description": "This video is about Siberian Husky Pro's And Cons, the good and the bad.\n👇👇The ULTIMATE Dog Training Course:👇👇\n►► http://bit.ly/TopRatedDogTraining ◄◄\n\nOur Website:\n►https://cockerspanielworld.com\n\nSiberian Huskies are one of those dog breeds that cause everyone around to pay attention. They have an alluring appeal with their beautiful blue eyes and wolf-like body profile. It is a canine that looks fierce when you first see them, but then their joyful personalities take over and you fall in love at first sight.\n\nThe Siberian Husky is also a dog that offers high energy levels and superior intelligence. It takes a special owner or family to adopt one of these canines. You will need to see if you can keep up with the physical and emotional needs of this breed before bringing one home because your experience and wisdom will be the difference in creating a successful experience.\n\nSeveral challenges face owners with a Siberian Husky, which is why they often end up being abandoned, taken to shelters, or becoming a stray. By evaluating the pros and cons of this breed before adopting a puppy or bringing home a doggo from your local shelter, you’ll know if you are ready for this challenge.\n\nVideo Inspired By\nFunny Pet Videos: https://youtu.be/lxm_2s--q3A\n\nDogs Wiz: https://youtu.be/kk8nOH_g5cc\n\nAnimal Wised: https://youtu.be/tbn8IF0D9Yg\n\nSixty Formula: https://youtu.be/zx3jbXXq2_8\n\nSixty Formula: https://youtu.be/zx3jbXXq2_8\n\n#SiberianHuskyProsAndCons #SiberianHuskyProsCons #ProsConsOfASiberianHusky siberian husky pros and cons siberian husky skin problems siberian husky ear problems doberman pros and cons of siberian husky siberian husky facts",
                        "thumbnails": {
                            "default": {
                                "url": "https://i.ytimg.com/vi/qN9Yor2gEB4/default.jpg",
                                "width": 120,
                                "height": 90
                            },
                            "medium": {
                                "url": "https://i.ytimg.com/vi/qN9Yor2gEB4/mqdefault.jpg",
                                "width": 320,
                                "height": 180
                            },
                            "high": {
                                "url": "https://i.ytimg.com/vi/qN9Yor2gEB4/hqdefault.jpg",
                                "width": 480,
                                "height": 360
                            },
                            "standard": {
                                "url": "https://i.ytimg.com/vi/qN9Yor2gEB4/sddefault.jpg",
                                "width": 640,
                                "height": 480
                            },
                            "maxres": {
                                "url": "https://i.ytimg.com/vi/qN9Yor2gEB4/maxresdefault.jpg",
                                "width": 1280,
                                "height": 720
                            }
                        },
                        "channelTitle": "Cocker Spaniel World",
                        "tags": [
                            "Siberian Husky pros and cons",
                            "Siberian Husky Pros And Cons",
                            "pros and cons of Siberian Husky",
                            "Doberman",
                            "Siberian Husky",
                            "Siberian Husky aggression problems",
                            "Siberian Husky behavior problems",
                            "Siberian Husky biting problems",
                            "Siberian Husky ear problems",
                            "Siberian Husky eye problems",
                            "Siberian Husky health problems",
                            "Siberian Husky problems",
                            "Siberian Husky skin problems",
                            "Siberian Husky temperament",
                            "Siberian Husky facts",
                            "Siberian Husky information",
                            "pros and cons of siberian husky"
                        ],
                        "categoryId": "15",
                        "liveBroadcastContent": "none",
                        "localized": {
                            "title": "Siberian Husky Pros And Cons | Should You REALLY Get A SIBERIAN HUSKY?",
                            "description": "This video is about Siberian Husky Pro's And Cons, the good and the bad.\n👇👇The ULTIMATE Dog Training Course:👇👇\n►► http://bit.ly/TopRatedDogTraining ◄◄\n\nOur Website:\n►https://cockerspanielworld.com\n\nSiberian Huskies are one of those dog breeds that cause everyone around to pay attention. They have an alluring appeal with their beautiful blue eyes and wolf-like body profile. It is a canine that looks fierce when you first see them, but then their joyful personalities take over and you fall in love at first sight.\n\nThe Siberian Husky is also a dog that offers high energy levels and superior intelligence. It takes a special owner or family to adopt one of these canines. You will need to see if you can keep up with the physical and emotional needs of this breed before bringing one home because your experience and wisdom will be the difference in creating a successful experience.\n\nSeveral challenges face owners with a Siberian Husky, which is why they often end up being abandoned, taken to shelters, or becoming a stray. By evaluating the pros and cons of this breed before adopting a puppy or bringing home a doggo from your local shelter, you’ll know if you are ready for this challenge.\n\nVideo Inspired By\nFunny Pet Videos: https://youtu.be/lxm_2s--q3A\n\nDogs Wiz: https://youtu.be/kk8nOH_g5cc\n\nAnimal Wised: https://youtu.be/tbn8IF0D9Yg\n\nSixty Formula: https://youtu.be/zx3jbXXq2_8\n\nSixty Formula: https://youtu.be/zx3jbXXq2_8\n\n#SiberianHuskyProsAndCons #SiberianHuskyProsCons #ProsConsOfASiberianHusky siberian husky pros and cons siberian husky skin problems siberian husky ear problems doberman pros and cons of siberian husky siberian husky facts"
                        },
                        "defaultAudioLanguage": "en-GB"
                    },
                    "statistics": {
                        "viewCount": "399240",
                        "likeCount": "6237",
                        "favoriteCount": "0",
                        "commentCount": "401"
                    }
                }
            ],
            "pageInfo": {
                "totalResults": 1,
                "resultsPerPage": 1
            }
        }
    );

    setCurrentVideoID(currentVideoInfo.items.id);
    console.log(currentVideoID);

    async function fakeSearchByIdFetch() {
        await setCurrentVideoInfo([
            [
                {
                    "kind": "youtube#video",
                    "etag": "94NbWQr-ArGtFniTpEF1SzT3mTU",
                    "id": "oLCKROFk0mc",
                    "snippet": {
                        "publishedAt": "2019-12-27T11:59:56Z",
                        "channelId": "UCy1F-f3Wbw6Y3vBSomMK5Zg",
                        "title": "Learning to Kitesurf - 10 Things to Know",
                        "description": "Yuri traveled to Hatteras with a kite school recently, and while he was there he interviewed a bunch of people who are learning to kitesurf. Here are the tips they had for anyone who is considering kiting and what they can expect as they learn the sport.  \n\n\n——————————————————————————\nGear We Use: https://kit.co/ourkitelife/our-kite-life-gear\n——————————————————————————\nInstagram:\n\nLaurie: https://www.instagram.com/laurie.kite/\n——————————————————————————",
                        "thumbnails": {
                            "default": {
                                "url": "https://i.ytimg.com/vi/oLCKROFk0mc/default.jpg",
                                "width": 120,
                                "height": 90
                            },
                            "medium": {
                                "url": "https://i.ytimg.com/vi/oLCKROFk0mc/mqdefault.jpg",
                                "width": 320,
                                "height": 180
                            },
                            "high": {
                                "url": "https://i.ytimg.com/vi/oLCKROFk0mc/hqdefault.jpg",
                                "width": 480,
                                "height": 360
                            }
                        },
                        "channelTitle": "Our Kite Life",
                        "tags": [
                            "kitesurf",
                            "kiteboard",
                            "how to",
                            "beginner",
                            "start",
                            "kitesurfing",
                            "kiting",
                            "kiteboarding",
                            "tips",
                            "advice",
                            "learn",
                            "kite",
                            "hatteras",
                            "learning",
                            "how to kitesurf",
                            "kiteboarding lessons",
                            "kitesurfing lessons"
                        ],
                        "categoryId": "17",
                        "liveBroadcastContent": "none",
                        "localized": {
                            "title": "Learning to Kitesurf - 10 Things to Know",
                            "description": "Yuri traveled to Hatteras with a kite school recently, and while he was there he interviewed a bunch of people who are learning to kitesurf. Here are the tips they had for anyone who is considering kiting and what they can expect as they learn the sport.  \n\n\n——————————————————————————\nGear We Use: https://kit.co/ourkitelife/our-kite-life-gear\n——————————————————————————\nInstagram:\n\nLaurie: https://www.instagram.com/laurie.kite/\n——————————————————————————"
                        }
                    },
                    "statistics": {
                        "viewCount": "120442",
                        "likeCount": "1136",
                        "favoriteCount": "0",
                        "commentCount": "108"
                    }
                }
            ]
        ]);
    };

    return (
        <div className="App">
            <TitleBar setYtResults={setYtResults} />
            
            <div>
                <VideoPlayer currentVideoID={currentVideoID} setYtResults={setYtResults} ytResults={ytResults} />
            </div>
            
        </div>
    );
};


export default App;
