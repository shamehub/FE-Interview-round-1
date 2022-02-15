function loadImg(src) {
    return new Promise(
        (resolve, reject) => {
            const img = document.createElement('img')
            img.onload = () => {
                resolve(img)
            }
            img.onerror = () => {
                const err = new Error(`图片加载失败 ${src}`)
                reject(err)
            }
            img.src = src
        }
    )
}

const url = 'https://img.mukewang.com/5a9fc8070001a82402060220-140-140.jpg';

(async function(){
    const img1 = await loadImg(url)
    console.log(img1.height,img1.width)
})()