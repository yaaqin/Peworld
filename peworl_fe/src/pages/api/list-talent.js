// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

const dataTalent = [
  {
  id: 1,
  photo: "https://i.pravatar.cc/150?u=a042581f4e29216704d",
  fullname: "Jamaluddin Akbar Wibowo",
  job: "Web Developer",
  location: "Jakarta",
  skills: ["PHP", "C++", "Java"]
},
{
  id: 2,
  photo: "https://i.pravatar.cc/150?u=2342581f9f29026704d",
  fullname: "Latifah Bima Wibawa",
  job: "Web Developer",
  location: "Jakarta",
  skills: ["PHP", "Javascript", "C++"]
},
{
  id: 3,
  photo: "https://i.pravatar.cc/150?u=a042581f4e2o026704d",
  fullname: "Sidik Burhanuddin Wibawa",
  job: "Web Developer",
  location: "Bandung",
  skills: ["PHP", "Javascript", "React"]
},
{
  id: 4,
  photo: "https://i.pravatar.cc/150?u=a042991f4e29026704d",
  fullname: "Dian Dwi Wibawa",
  job: "Web Developer",
  location: "Bandung",
  skills: ["PHP", "Javascript", "React", "Express", "Next", "Golang", "Tailwind"]
},
{
  id: 5,
  photo: "https://i.pravatar.cc/150?u=a042598f4e29026704d",
  fullname: "Darma Agung Wibowo",
  job: "Web Developer",
  location: "Semarang",
  skills: ["PHP", "Javascript", "React", "Golang", "Tailwind"] 
},
{
  id: 6,
  photo: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
  fullname: "Ruslan Ratna Wibowo",
  job: "Web Developer",
  location: "Surabaya",
  skills: ["Javascript", "React", "Material UI"]
},
{
  id: 7,
  photo: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
  fullname: "Annisa Latifah Wibawa",
  job: "Web Developer",
  location: "Jakarta",
  skills: ["Javascript", "React"]
},
{
  id: 8,
  photo: "https://i.pravatar.cc/150?u=a042581f4e29026704g",
  fullname: "Agung Wangi Wibowo",
  job: "Web Developer",
  location: "Bandung",
  skills: ["Tailwind", "Javascript", "React"]
},
{
  id: 9,
  photo: "https://i.pravatar.cc/150?u=a042581f4e29029604d",
  fullname: "Widya Faisal Wibawa",
  job: "Web Developer",
  location: "Semarang",
  skills: ["Golang", "Javascript", "React", "Bootstrap"]
},
{
  id: 10,
  photo: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
  fullname: "Citra Akhmad Wibawa",
  job: "Web Developer",
  location: "Semarang",
  skills: ["Next.js", "Javascript", "React"]
},
{
  id: 11,
  photo: "https://i.pravatar.cc/150?u=a042581n7e29026704d",
  fullname: "Vina Taufik Wibowo",
  job: "Web Developer",
  location: "Yogyakarta",
  skills: ["Express.JS", "Golang", "React"]
},
{
  id: 12,
  photo: "https://i.pravatar.cc/150?u=a042581f4e20026704d",
  fullname: "Yuliana Sitti Wibawa",
  job: "Web Developer",
  location: "Banten",
  skills: ["Java", "Javascript", "React", "Native"]
},
{
  id: 13,
  photo: "https://i.pravatar.cc/150?u=a042581f4d99026704d",
  fullname: "Vina Widya Wibowo",
  job: "Web Developer",
  location: "Yogyakarta",
  skills: ["Next.JS", "Javascript", "React"]
},
{
  id: 14,
  photo: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
  fullname: "Dwi Edi Wibawa",
  job: "Web Developer",
  location: "Yogyakarta",
  skills: ["PHP", "Javascript", "React", "Express"]
},
{
  id: 15,
  photo: "https://i.pravatar.cc/150?u=a042581f4e29026704d",
  fullname: "Sri Dian Wibawa",
  job: "Web Developer",
  location: "Semarang",
  skills: ["PHP", "Golang", "Java", "Javascript", "React"]
},
{
  id: 16,
  photo: "https://i.pravatar.cc/150?u=a042981f4e29026704d",
  fullname: "Guntur Yusuf Wibawa",
  job: "Web Developer",
  location: "Bali",
  skills: ["PHP", "React", "Golang"]
},
{
  id: 17,
  photo: "https://i.pravatar.cc/150?u=a042555f4e29026704d",
  fullname: "Aisyah Cahya Wibowo",
  job: "Web Developer",
  location: "Banten",
  skills: ["React"]
},
{
  id: 18,
  photo: "https://i.pravatar.cc/150?u=a902581f4e29026704d",
  fullname: "Ratu Idris Wibowo",
  job: "Web Developer",
  location: "Jakarta",
  skills: ["Javascript", "React"]
},
{
  id: 19,
  photo: "https://i.pravatar.cc/150?u=a042590f4e29026704d",
  fullname: "Tirta Rahman Wibawa",
  job: "Web Developer",
  location: "Bandung",
  skills: ["PHP", "React"]
},
{
  id: 20,
  photo: "https://i.pravatar.cc/150?u=a042581f4e00026704d",
  fullname: "Bachtiar Nur Wibawa",
  job: "Web Developer",
  location: "Balikpapan",
  skills: ["PHP", "Javascript", "React", "Kotlin"]
},
{
  id: 21,
  photo: "https://i.pravatar.cc/150?u=a042581f4e90026704d",
  fullname: "Halimah Dian Wibowo",
  job: "Web Developer",
  location: "Riau",
  skills: ["PHP", "Javascript", "React", "Java"]
},
{
  id: 22,
  photo: "https://i.pravatar.cc/150?u=a098581h7e29026704d",
  fullname: "Nur Ahmad Wibowo",
  job: "Web Developer",
  location: "Banten",
  skills: ["Javascript"]
},
]

export default function handler(req, res) {
  res.status(200).json({ status: true, Message: "Get Data Success", Data: dataTalent })
}
