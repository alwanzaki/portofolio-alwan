/* ===== 1. KONTAK: isi sendiri (kosongkan jika tidak punya, tombolnya otomatis tidak muncul) ===== */
const kontak = {
  email:    "alwanzaki2314@gmail.com",
  github:   "https://github.com/alwanzaki"
};

/* ===== FOTO PROFIL: taruh file di folder img/ (misalnya img/foto.jpg).
   Jika file tidak ditemukan, kartu profil menampilkan inisial ANZ. ===== */
const fotoProfil = "img/alwan.jpeg";

/* ===== 2. KEAHLIAN ===== */
const ikon = {
  kode:   '<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>',
  data:   '<ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.7 4 3 9 3s9-1.3 9-3V5"/><path d="M3 12c0 1.7 4 3 9 3s9-1.3 9-3"/>',
  git:    '<line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/>',
  desain: '<rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/>'
};

const skill = [
  { ikon: "kode",   judul: "Web Development", isi: "HTML, CSS, JavaScript, PHP" },
  { ikon: "data",   judul: "Database",        isi: "MySQL, perancangan basis data" },
  { ikon: "git",    judul: "Tools",           isi: "Git, GitHub, VS Code" },
  { ikon: "desain", judul: "UI / UX",         isi: "Wireframe, prototyping, Figma" }
];

/* ===== 3. PROYEK: salin satu blok { ... } untuk menambah proyek ===== */
// gambar: taruh screenshot di folder img/, lalu isi "img/nama-file.png". Kosong = tampil kotak SPK.
const proyek = [
  {
    jenis: "Web Application",
    judul: "SPK Pemilihan Siswa Berprestasi",
    singkat: "SPK",
    subjudul: "Decision Support System",
    deskripsi: "Aplikasi sistem pendukung keputusan untuk menentukan peringkat siswa berprestasi dengan metode Simple Additive Weighting (SAW).",
    fitur: [
      "Login admin dan pengelolaan data siswa, kriteria, dan penilaian",
      "Perhitungan SAW otomatis: matriks, normalisasi, nilai preferensi, ranking",
      "Laporan hasil dalam format PDF dan Excel"
    ],
    teknologi: ["PHP", "MySQL", "Bootstrap", "SAW"],
    gambar: "img/Spk.png",
    github: "https://github.com/alwanzaki/spk-saw-siswa-berprestasi",   
    demo: ""
  }
  // ----- PROYEK BARU -----
  // Cara pakai: tambahkan koma setelah tanda } milik proyek SPK di atas,
  // lalu salin blok di bawah ini (hapus tanda // di depan tiap baris) dan isi datanya.
  //
  // {
  //   jenis: "Web Application",        // contoh: Web Application, Mobile App, Latihan
  //   status: "Dalam pengerjaan",      // kosongkan "" jika sudah selesai
  //   judul: "Nama Proyek Baru",
  //   singkat: "NPB",                  // teks besar di kotak gambar (dipakai jika gambar kosong)
  //   subjudul: "Deskripsi singkat",
  //   deskripsi: "Satu atau dua kalimat tentang masalah yang diselesaikan proyek ini.",
  //   fitur: [
  //     "Fitur utama pertama",
  //     "Fitur utama kedua"
  //   ],
  //   teknologi: ["HTML", "CSS", "JavaScript"],
  //   gambar: "",                      // contoh: "img/proyek-baru.png"
  //   github: "",
  //   demo: ""
  // }
  // -----------------------
];

// true = tampilkan kartu putus-putus "Proyek berikutnya" di akhir daftar; false = sembunyikan
const tampilkanSlotProyek = true;

/* ===== KODE: biasanya tidak perlu diubah ===== */
const aman = t => String(t).replace(/[&<>"']/g, c => ({ "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;" }[c]));

// Keahlian: kartu otomatis menyesuaikan lebar layar dan terbagi rata,
// jadi 4 kartu tampil satu baris di laptop, 2x2 di tablet, dan 1 kolom di HP.
const wadahSkill = document.getElementById("daftar-skill");
wadahSkill.style.gridTemplateColumns = "repeat(auto-fit, minmax(230px, 1fr))";
wadahSkill.innerHTML = skill.map(s => `
  <div class="skill">
    <svg viewBox="0 0 24 24" aria-hidden="true">${ikon[s.ikon]}</svg>
    <h3>${aman(s.judul)}</h3>
    <p>${aman(s.isi)}</p>
  </div>`).join("");

document.getElementById("daftar-proyek").innerHTML = proyek.map(p => `
  <article class="proyek">
    ${p.gambar
      ? `<img class="proyek-visual" src="${aman(p.gambar)}" alt="Tampilan ${aman(p.judul)}">`
      : `<div class="proyek-visual" aria-hidden="true"><div>${aman(p.singkat)}<small>${aman(p.subjudul)}</small></div></div>`}
    <div class="proyek-isi">
      <p class="jenis">${aman(p.jenis)}${p.status ? ` <span class="chip" style="margin:0 0 0 8px">${aman(p.status)}</span>` : ""}</p>
      <h3>${aman(p.judul)}</h3>
      <p>${aman(p.deskripsi)}</p>
      <ul class="fitur">${p.fitur.map(f => `<li>${aman(f)}</li>`).join("")}</ul>
      <div>${p.teknologi.map(t => `<span class="chip">${aman(t)}</span>`).join("")}</div>
      <div class="proyek-link">
        ${p.github ? `<a href="${aman(p.github)}" target="_blank" rel="noopener">Lihat di GitHub &#8599;</a>` : ""}
        ${p.demo ? `<a href="${aman(p.demo)}" target="_blank" rel="noopener">Coba demo &#8599;</a>` : ""}
      </div>
    </div>
  </article>`).join("") + (tampilkanSlotProyek ? `
  <div class="proyek" style="border-style:dashed;background:transparent;display:grid;place-items:center;text-align:center;padding:40px 24px;min-height:260px;">
    <div>
      <p style="font-size:1.1rem;font-weight:700;margin:0 0 6px;">Proyek berikutnya sedang dikerjakan</p>
      <p style="margin:0;color:var(--teks-pudar);font-size:.95rem;">Proyek baru akan ditampilkan di sini.</p>
    </div>
  </div>` : "");

const tombolKontak = [
  kontak.email  && `<a class="btn btn-utama" href="mailto:${aman(kontak.email)}">Kirim Email</a>`,
  kontak.github && `<a class="btn" href="${aman(kontak.github)}" target="_blank" rel="noopener">GitHub &#8599;</a>`
].filter(Boolean);
document.getElementById("daftar-kontak").innerHTML = tombolKontak.join("");

// Foto profil: dipasang hanya jika file-nya ada
const avatar = document.querySelector(".avatar");
if (avatar && fotoProfil) {
  const foto = new Image();
  foto.alt = "Foto Alwan Naufal Zaki";
  foto.onload = () => {
    avatar.textContent = "";
    avatar.style.overflow = "hidden";
    avatar.style.padding = "0";
    foto.style.cssText = "width:100%;height:100%;object-fit:cover;display:block;";
    avatar.appendChild(foto);
  };
  foto.src = fotoProfil;
}

// Menu di layar kecil
const menu = document.getElementById("menu");
const tombolMenu = document.getElementById("tombol-menu");
tombolMenu.addEventListener("click", () => {
  tombolMenu.setAttribute("aria-expanded", menu.classList.toggle("buka"));
});
menu.addEventListener("click", e => {
  if (e.target.tagName === "A") { menu.classList.remove("buka"); tombolMenu.setAttribute("aria-expanded", "false"); }
});

// Tandai menu yang sedang dibaca
const tautan = [...menu.querySelectorAll("a")];
const pengamat = new IntersectionObserver(entri => {
  entri.forEach(e => {
    if (e.isIntersecting) tautan.forEach(a => a.classList.toggle("aktif", a.getAttribute("href") === "#" + e.target.id));
  });
}, { rootMargin: "-45% 0px -50% 0px" });
document.querySelectorAll("main section[id]").forEach(s => pengamat.observe(s));

document.getElementById("tahun").textContent = new Date().getFullYear();