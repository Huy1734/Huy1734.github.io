/* =====================================================
   TUỆ NAM - VOVINAM | script.js
   Gồm: form đăng ký, lightbox ảnh, popup đặt show,
   đăng nhập admin, phím tắt Esc.
   Số Zalo dùng trong file: 0978235785 (đổi ở các link zalo.me)
   ===================================================== */

// ----- Form "Đăng ký học thử" ở đầu trang: gom thông tin rồi mở Zalo -----
function dangKy() {
  var ten = document.getElementById("hoten").value || "";
  var sdt = document.getElementById("sdt").value || "";
  var lop = document.getElementById("lop").value || "";
  var msg =
    "Chào thầy Nguyễn Nhật Lâm! Em muốn đăng ký học thử: " +
    lop +
    " - Họ tên: " +
    ten +
    " - SĐT: " +
    sdt;
  window.location.href = "https://zalo.me/0978235785?text=" + encodeURIComponent(msg);
}

// ----- Lightbox: phóng to ảnh được bấm, lấy chú thích từ <figcaption> -----
function openLightbox(el) {
  var lb = document.getElementById("lightbox");
  document.getElementById("lbImg").src = el.src;
  document.getElementById("lbImg").alt = el.alt;
  var cap = el.parentElement.querySelector("figcaption");
  document.getElementById("lbCap").innerText = cap ? cap.innerText : el.alt;
  lb.classList.add("show");
  event.stopPropagation();
}
function closeLightbox() {
  document.getElementById("lightbox").classList.remove("show");
}

// ----- Popup "Đặt lịch biểu diễn": goi = tên gói được chọn sẵn trong ô <select id="ppGoi"> -----
function openPopup(goi) {
  if (goi) document.getElementById("ppGoi").value = goi;
  document.getElementById("popupDatShow").classList.add("show");
}
function closePopup() {
  document.getElementById("popupDatShow").classList.remove("show");
}

// ----- Gửi form đặt show: gom thông tin thành tin nhắn rồi mở Zalo -----
function guiDatShow() {
  var ten = document.getElementById("ppTen").value || "";
  var sdt = document.getElementById("ppSdt").value || "";
  var goi = document.getElementById("ppGoi").value || "";
  var ngay = document.getElementById("ppNgay").value || "Chưa chọn ngày";
  var dd = document.getElementById("ppDiaDiem").value || "";
  var gc = document.getElementById("ppGhiChu").value || "";
  var msg =
    "Chào thầy Nguyễn Nhật Lâm! Em muốn ĐẶT SHOW BIỂU DIỄN:\n- Gói: " +
    goi +
    "\n- Tên: " +
    ten +
    "\n- SĐT: " +
    sdt +
    "\n- Ngày diễn: " +
    ngay +
    "\n- Địa điểm: " +
    dd +
    "\n- Ghi chú: " +
    gc;
  window.location.href = "https://zalo.me/0978235785?text=" + encodeURIComponent(msg);
}

// ----- Đăng nhập / đăng xuất admin -----
// ⚠️ Lưu ý: tài khoản được kiểm tra ngay trên trình duyệt nên KHÔNG an toàn,
//    ai xem mã nguồn cũng thấy mật khẩu. Chỉ nên dùng để thử nghiệm.
function loginAdmin() {
  var u = document.getElementById("adminUser").value;
  var p = document.getElementById("adminPass").value;
  if (u === "admin" && p === "tuenam123") {
    document.getElementById("loginPopup").classList.remove("show");
    document.getElementById("adminPanel").classList.add("show");
    localStorage.setItem("tuenam_admin", "1");
  } else {
    document.getElementById("loginMsg").innerText =
      "Sai tên hoặc mật khẩu! Thử lại: admin / tuenam123";
  }
}
function logoutAdmin() {
  localStorage.removeItem("tuenam_admin");
  document.getElementById("adminPanel").classList.remove("show");
  alert("Đã đăng xuất!");
}

// ----- Nhấn phím Esc để đóng lightbox và popup đặt show -----
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeLightbox();
    closePopup();
  }
});