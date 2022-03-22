import axios from 'axios'
import instaDB from '../db/instaDB';
import moment from 'moment'

export default class InstaService {

    RestorAccessToken() {
        var db = new instaDB();

        db.getInstaToken(async (result) => {
            var oldAccessToken = result.token;
            var last_update = moment(result.last_update);

            var isAfter = last_update.add(30, 'days').isAfter(moment())
            if (!isAfter) {
                try {
                    let resp = await axios.get(`https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=${oldAccessToken}`)

                    if (resp.data.access_token) {
                        let newAccessToken = resp.data.access_token;
                        db.updateInstaToken(newAccessToken, (result: boolean) => { })
                    }
                } catch (error) {
                    console.log(error)
                }
            }
        })
    }

    async GetMediaFromInsta(callback) {
        var db = new instaDB();
        db.getInstaToken(async (result) => {
            try {
                let resp = await axios.get(`https://graph.instagram.com/me/media?fields=id,permalink,caption,media_url&access_token=${result.token}`);
                let instaPhotos = resp.data//.filter(d => d.media_type === "IMAGE").map(d => d.media_url);

                for (let i = 0; i < instaPhotos.data.length; i++) {
                    const element = instaPhotos.data[i];
                    if (element.media_url.includes('mp4')) {
                        element.html = '<video height="295" controls><source src="' + element.media_url + '" type="video/mp4">Your browser does not support the video tag.</video>';
                        element.isVideo = true
                    } else {
                        element.html = '<img src="' + element.media_url + '" class="gallery-image" alt="">';
                        element.isVideo = false
                    }
                }

                callback(instaPhotos)
            } catch (error) {
                console.log(error)
                callback({ data: [], paging: {} })
            }
        })
    }
}