import type { VipTool, VipToolGroup, VipPromptGroup } from "@/lib/aiVipBundle";

/**
 * Bản sao lưu trữ độc lập của kho VIP tại thời điểm hiện tại — KHÔNG tự đồng bộ
 * với aiVipBundle.ts. Dùng cho link dự phòng gửi riêng, để nội dung công khai
 * trên trang sản phẩm có thể được rút gọn sau này mà không ảnh hưởng bản này.
 */

export const vipFlowGroupsFull: VipToolGroup[] = [
  {
    group: "Video hàng loạt & Automation",
    tools: [
      { name: "TẠO 20 VIDEO", link: "https://labs.google/fx/tools/flow/shared/tool/98826751-588a-4e85-ab77-0a459af66230" },
      { name: "TAO 9 VIDEO HANG LOAT", link: "https://labs.google/fx/tools/flow/shared/tool/cdcc2288-c7f1-410b-b220-347f2debd8ea" },
      { name: "SÁNG TẠO VIDEO AI", link: "https://labs.google/fx/tools/flow/shared/tool/a3e6a6db-37c4-4e37-be37-9a3b0673be5a" },
      { name: "TAO VIDEO HANG LOAT", link: "https://labs.google/fx/tools/flow/shared/tool/569f4607-bee8-48d6-a4d5-ba1cfb0acf3a" },
      { name: "Auto ảnh video flow", link: "https://labs.google/fx/tools/flow/shared/tool/88529d82-fb09-46a7-a256-a5a7810c1ec8" },
      { name: "VEO 3 AI PRO", link: "https://labs.google/fx/tools/flow/shared/tool/c970f182-5e50-4166-af19-835eba7bd87a" },
      { name: "Batch Video Automator", link: "https://labs.google/fx/tools/flow/shared/tool/a5867252-5e33-4425-a2e6-8fd25b423f16" },
    ],
  },
  {
    group: "Kịch bản & Storyboard",
    tools: [
      { name: "Storyboard", link: "https://labs.google/fx/tools/flow/shared/tool/1bacc578-6632-4446-9ded-15aa194956e1" },
      { name: "Full Flows tạo KOL AI", link: "https://labs.google/fx/tools/flow/shared/tool/ea74720e-464a-4f9e-8d07-91e22b2a8eb4" },
      { name: "AI Video Factory", link: "https://labs.google/fx/vi/tools/flow/project/afa0cc28-2070-4072-b6b9-1a1a0e0eae27/tool-version/721e7d7b-d453-46e1-8dc0-649b1385e10e" },
      { name: "KOL & STORYBOARD", link: "https://labs.google/fx/tools/flow/shared/tool/e7c4fa20-29a7-457d-adf0-1f7a8065fbc7" },
      { name: "studio workflow", link: "https://labs.google/fx/tools/flow/shared/tool/3164f6b3-f4f4-40f2-a153-9a9cb0ad98cc" },
      { name: "Scene Architect", link: "https://labs.google/fx/tools/flow/shared/tool/c1bc5103-f649-467d-a887-10acef450855" },
      { name: "Muse's Story Studio Pro", link: "https://labs.google/fx/tools/flow/shared/tool/1bac7b75-2ed3-4964-8682-f02409b3fd2d" },
    ],
  },
  {
    group: "Hiệu ứng & Hậu kỳ nâng cao",
    tools: [
      { name: "NEON FLOW VIP", link: "https://labs.google/fx/tools/flow/shared/tool/035e002e-f4f3-42d1-bcb2-aaeb274809cb" },
      { name: "Ultra Cinematic Engine", link: "https://labs.google/fx/tools/flow/shared/tool/952e3c0d-674f-452a-933a-1fc48bf66b70" },
      { name: "Relight", link: "https://labs.google/fx/tools/flow/shared/tool/e162f151-62dd-4cf4-865a-50962f18b587" },
      { name: "Face Mixer", link: "https://labs.google/fx/tools/flow/shared/tool/be23f519-e5f1-49d1-a8de-c0063633da53" },
      { name: "Turnaround Slicer", link: "https://labs.google/fx/tools/flow/shared/tool/e3e09843-e90a-42cb-a11b-80ca4e8164ec" },
      { name: "Stylify", link: "https://labs.google/fx/tools/flow/shared/tool/d7f37e79-1868-4c55-ad1b-39c80aca507f" },
      { name: "Avatar Studio Pro 1.7", link: "https://labs.google/fx/tools/flow/shared/tool/9ca9843b-f2a3-442b-8442-b104ed5a58fd" },
      { name: "Shot Explorer Pro 3.1", link: "https://labs.google/fx/tools/flow/shared/tool/1b9698e5-3760-4649-a8f9-62c4d144ac72" },
      { name: "Neural Director Pro", link: "https://labs.google/fx/tools/flow/shared/tool/c71b316a-889b-449b-b244-d29d5f796499" },
    ],
  },
  {
    group: "Ngành & chủ đề riêng",
    tools: [
      { name: "ONE BUSINESS KOL AI", link: "https://labs.google/fx/tools/flow/shared/tool/af029ab4-bbf2-4418-a326-bf40d0653239" },
      { name: "APP THỜI TRANG", link: "https://labs.google/fx/tools/flow/shared/tool/ffc3498a-f111-48c1-933b-df2a3f562f7c" },
      { name: "ONG CHU MMO", link: "https://labs.google/fx/tools/flow/shared/tool/b9cbcb4d-c2de-41a0-8e21-8b363e846015" },
      { name: "DOUYIN STUDIO", link: "https://labs.google/fx/tools/flow/shared/tool/08a35bf5-2ee2-4176-b166-9d12d4d95a9a" },
      { name: "TVC AI VIDEO MASTER", link: "https://labs.google/fx/tools/flow/shared/tool/e76c9fac-7e7e-4f02-8f99-929694b7ae7b" },
      { name: "Render ảnh Thiết Kế Kiến Trúc", link: "https://labs.google/fx/tools/flow/shared/tool/143c186a-d108-42fb-b82b-b840013d8f57" },
      { name: "XƯỞNG PHIM", link: "https://labs.google/fx/tools/flow/shared/tool/4fd22a6d-4fac-4a3f-8658-678c20a996c2" },
      { name: "AI CANVAS FLOW", link: "https://labs.google/fx/tools/flow/shared/tool/75cc3756-8b11-44cb-aa60-f832d6c4d1ec" },
      { name: "Prompt Alchemist", link: "https://labs.google/fx/tools/flow/shared/tool/5d2d6c96-603f-45d8-9757-e0720cc25c8a" },
      { name: "App tạo ảnh Pro", link: "https://labs.google/fx/tools/flow/shared/tool/6bfb38e8-8583-42e3-a233-8e1e506d5e02" },
    ],
  },
];

export const vipAiStudioGroupsFull: VipToolGroup[] = [
  {
    group: "Ảnh doanh nhân & công sở",
    tools: [
      { name: "Tạo ảnh doanh nhân ALL", link: "https://ai.studio/apps/drive/1BnEY3Y6gP_qysCUYZrd5ZkWxZ4q8V4YG" },
      { name: "Tạo ảnh doanh nhân NỮ", link: "https://ai.studio/apps/drive/1RGSnbPn6RP1OtsJj7r6ajpAm2m5oe4JL" },
      { name: "Tạo ảnh Thẻ chuyên nghiệp", link: "https://ai.studio/apps/ed2f2708-a0ff-4e0c-b1cd-ffb97fa9398f?fullscreenApplet=true" },
    ],
  },
  {
    group: "Thời trang & trang phục",
    tools: [
      { name: "Ảnh Tạp Chí và Cầm sản phẩm", link: "https://ai.studio/apps/drive/1OeD3tNt7LnIrTlVPn070dMcWE35lTrzj" },
      { name: "Ảnh Mẫu + sản phẩm", link: "https://ai.studio/apps/drive/1csrWfa5Qe8pJwcOCd-Qof5mA-IZ228R_" },
      { name: "Thử đồ cùng ngôi sao bóng đá", link: "https://ai.studio/apps/drive/1YB5YlnMHGvUSY4cMG5VqDZMwu3xqZ-SN?fullscreenApplet=true" },
      { name: "Áo dài và hoa khắp Việt Nam tóc dài", link: "https://ai.studio/apps/drive/1F1G8t8GabsZXBlQI6s9Z00Ul5UVM80s0" },
      { name: "Áo dài và hoa khắp Việt Nam 02", link: "https://ai.studio/apps/drive/1p_oCNZnKz-S-_DWslBJp13RfPhrYmo18" },
      { name: "Tạo 4 biến thể ảnh (không thay trang phục)", link: "https://ai.studio/apps/drive/1tL95FmMGT_DylYdjWUO7rvTGPGATaz_Z" },
      { name: "Tạo 4 biến thể ảnh CÓ thay trang phục", link: "https://ai.studio/apps/drive/1khFkADnYbOpJ384lIR9Wc5Oi3xi_q7Mi?fullscreenApplet=true" },
      { name: "Tách trang phục", link: "https://ai.studio/apps/drive/1R4kTnMCqa_XVRxZCE4YZPVpuJtv_juwc?fullscreenApplet=true" },
      { name: "APP THỜI TRANG VIP V1 PRO", link: "https://ai.studio/apps/drive/1BsfcQTHfqZZrJs7VmV-XeHN_Nx3ErFgc?fullscreenApplet=true" },
      { name: "APP TRỢ LÝ TÁCH TRANG PHỤC 3D", link: "https://ai.studio/apps/drive/1_RbUE3a0Wg7AvK_xWw0WoCUaxtTwIzUm?fullscreenApplet=true" },
      { name: "AI Trang sức - Final v2", link: "https://aistudio.google.com/apps/cc8e278a-a601-41a1-82a5-82d1da07cf86?showPreview=true&showAssistant=true" },
      { name: "APP TÁCH QUẦN ÁO MẶC CHO NGƯỜI MẪU Ve.1", link: "https://aistudio.google.com/apps/41addc9c-1eca-4fb0-b493-740ba67e9062?showPreview=true&showAssistant=true" },
    ],
  },
  {
    group: "Lễ tết & sự kiện",
    tools: [
      { name: "TẾT GIÀU SANG PHÚ QUÝ - 2026", link: "https://ai.studio/apps/drive/1ZDf_N5YKyF7Zl6S9DfsRHl_l1rLuWfP8?fullscreenApplet=true" },
      { name: "Ảnh Trung Thu (trẻ em + Người lớn)", link: "https://ai.studio/apps/drive/1I6iD8g7j0ktqIySOWQpJpIFN3W4kIb1M" },
      { name: "Ảnh Trung Thu (chân dung người lớn)", link: "https://ai.studio/apps/drive/11Gxi-FF9sdD0U4s12sb6bfGauPfsbswP" },
      { name: "Ảnh 20/10", link: "https://ai.studio/apps/drive/1PtYKApWwN4gqnA9YZmBqg24fllB-uSNN" },
      { name: "Ảnh 20/10 (1)", link: "https://ai.studio/apps/drive/16vNv481JvlftpBWDlXWql9yHoWDc7PlY" },
      { name: "Ảnh 20/10 (2)", link: "https://ai.studio/apps/drive/1lNbjMicRbCFOyCLtmXfl1e-94VRM2pGh" },
      { name: "HALLLOWEN", link: "https://ai.studio/apps/drive/1PNp-NPSlOCxK66EArui5q8hIiHoBtCcM" },
      { name: "Mừng ngày nhà giáo", link: "https://ai.studio/apps/drive/1p0nLJ6mX4XsTSUyJaEWYQgIfkKbKC2-F" },
      { name: "Tạo ảnh ngày lễ, kỷ niệm", link: "https://ai.studio/apps/drive/1bBpPGl0N3S_mfaTx7b3zVTici5a_4VJV?fullscreenApplet=true" },
      { name: "APP TẠO ẢNH Lịch Tết Bính Ngọ 2026 – Check-in", link: "https://ai.studio/apps/drive/1P7rkJOLYpCuIQDpCzfmDZCe6d_lx0zam?fullscreenApplet=true" },
      { name: "ẢNH XINH TẾT YÊU THƯƠNG", link: "https://aistudio.google.com/apps/drive/15dpGYVyKTcoFkay6njPoK_lIBm1EfJkS?showPreview=true&showAssistant=true&resourceKey=" },
      { name: "TẾT ĐONG ĐẦY", link: "https://ai.studio/apps/864b6f92-5d26-43f3-8729-094e0d27d86c?fullscreenApplet=true" },
    ],
  },
  {
    group: "Ảnh nghệ thuật & du lịch",
    tools: [
      { name: "Ảnh STUDIO Đẳng Cấp", link: "https://ai.studio/apps/drive/1WuYjY40Ja_p2wADl2aqNrJt8gy5Lao8b" },
      { name: "Ảnh du lịch", link: "https://ai.studio/apps/drive/1aOvW7ZRrIqQ1Te7wkpHL5kEKF96PhkKi" },
      { name: "Tạo ảnh concept Hàn Quốc", link: "https://ai.studio/apps/drive/1Nq8aQzAbOxfUQB7gnRxZYMr1543IyFE9" },
      { name: "Tạo 4 biến thể Ảnh", link: "https://ai.studio/apps/drive/1k0V2MGzeopE_C6iHXJ5jgzw4zixmBl3u" },
      { name: "Tạo Ảnh 4 mùa", link: "https://ai.studio/apps/drive/12mPMC0ch4tKOr1VAJcOMicQYQ7XfKClP" },
      { name: "Ảnh Kiếm Hiệp (Nữ)", link: "https://ai.studio/apps/drive/1UJwd51KHOti_aoSV-Kxe4bhkUAhBCQ8E" },
      { name: "Ảnh Nghệ Thuật", link: "https://ai.studio/apps/drive/1mq3ucwzc27H-VeqUASUIhuVLqRwQPfFf" },
      { name: "Ảnh Nữ Thần", link: "https://ai.studio/apps/drive/1LLgnENiFnwCX105uCiVjiTSctxq47D3C" },
      { name: "Ảnh Sang Chảnh (update)", link: "https://ai.studio/apps/drive/1LaYzYpmp_VVCtsw2RUqBcVUoCJQyyBdP" },
      { name: "APP làm đẹp ảnh", link: "https://ai.studio/apps/drive/1f7ytlSApp625x2pamXmS_2CJopDtKyjD" },
      { name: "App Noen", link: "https://aistudio.google.com/apps/drive/18XWbYq-yeou4oneZwEhfStz738oxMB4s?showPreview=true&showAssistant=true&resourceKey=" },
      { name: "APP Ca sỹ", link: "https://ai.studio/apps/drive/1eCl6qONf1a-Hiwy1DE8x0u1CrXI2OwMe?fullscreenApplet=true" },
      { name: "TẠO ẢNH DU LỊCH", link: "https://aistudio.google.com/apps/drive/11F3TbXE4dd6FfRMNejes2QdZIj_YtYPD" },
      { name: "TẠO ẢNH KẾT HỢP", link: "https://aistudio.google.com/apps/drive/1dxAMoTts4eS-9X8MXuc-5JVQYSmGHsLT" },
      { name: "Tạo truyện tranh _ ComicGen - Doraemon Style", link: "https://ai.studio/apps/drive/1O4-eb_8t5e11bi7i5OTuc9kWn_DpBa8s?fullscreenApplet=true" },
      { name: "LuxeAI Studio", link: "https://aistudio.google.com/apps/drive/1Uq4Vpfi9X2WDxr_zfA8KSNpYsphwNavX?showPreview=true&showAssistant=true" },
      { name: "PHỤC CHẾ ẢNH CŨ", link: "https://ai.studio/apps/drive/1AFSgHEDLuzb5dp-UUxpHvgL1y5vMwRJ7?fullscreenApplet=true" },
    ],
  },
  {
    group: "Content, Prompt & Video Veo3",
    tools: [
      { name: "TẠO ẢNH TOÀN NĂNG - SIÊU VIP", link: "https://ai.studio/apps/drive/1HQ1X2ffzEmeIWh34imSOzsCUxUvPGNuD?fullscreenApplet=true" },
      { name: "APP CONTENT SIÊU ĐỈNH", link: "https://ai.studio/apps/drive/1hvmFjXaLkRsu4uzH5ih2fN-NIYqRxOU-?fullscreenApplet=true" },
      { name: "Tạo prompt từ ảnh", link: "https://ai.studio/apps/drive/1U2KPEyDyU_owgQ7aLr9xxazSiSXGBXUh" },
      { name: "APP Tạo câu lệnh mới", link: "https://ai.studio/apps/drive/1EDVJDRVRZvKN8PfY5zVC-XfduQ4UKzjl" },
      { name: "App Tạo ảnh hàng loạt (dán prompt)", link: "https://ai.studio/apps/drive/16yllfYHOlcvabCsTP1yzZwHk8BoqVOJm" },
      { name: "Ảnh Thumnail", link: "https://ai.studio/apps/drive/1jbgn1yIvyJQAvOOqKK2cyf9YlQaydHlb" },
      { name: "APP TOÀN NĂNG", link: "https://ai.studio/apps/drive/1dabjHiXaYAgqDWoaZwbBK3bpG1ah598M" },
      { name: "Tái tạo concept: tạo prompt + 2 ảnh (Thủy Tiên)", link: "https://aistudio.google.com/apps/drive/1YY4CdI6WosIPdw5tIADO2qND0cipWCuZ?showPreview=true&showAssistant=true&resourceKey=" },
      { name: "PIDTAP VO3 - Veo 3 Video Prompt Architect", link: "https://ai.studio/apps/drive/1FTt_622nV-zPzM-PogHBgxrSU7FqTsDa?fullscreenApplet=true" },
      { name: "Video Spy Pro - Phân Tích Video Đối Thủ", link: "https://ai.studio/apps/drive/1GNakyp7X7z3zUNvvmyU6jEIjyy1mD-hY?fullscreenApplet=true" },
      { name: "NBOX PROMPT_PUBLIC APP", link: "https://ai.studio/apps/drive/1oZ1kHtM-l4z53XcKUBVBpHuA-TEs8fLI?fullscreenApplet=true" },
      { name: "VEO 3 Prompt Studio", link: "https://ai.studio/apps/6796c7b2-e452-49cb-a69e-9119975d667b?fullscreenApplet=true" },
      { name: "TRÌNH TẠO KỊCH BẢN VÀ ĐỒNG NHẤT NHÂN VẬT", link: "https://ai.studio/apps/06131f06-c7ff-4f02-b394-5a1f7756d7ba" },
      { name: "MASTER AI GIẢI MÃ VIDEO - TẠO KỊCH BẢN", link: "https://ai.studio/apps/5419c9e0-528f-40ed-a033-3f654811b257?fullscreenApplet=true" },
      { name: "APP SÁNG TẠO PROMPT VIP", link: "https://aistudio.google.com/apps/f182cf83-b782-4fa2-a3da-e192492b5c6c?showPreview=true&showAssistant=true" },
    ],
  },
  {
    group: "Thiết kế, kiến trúc & xây dựng",
    tools: [
      { name: "Đồ Họa Sư Đại Tài", link: "https://ai.studio/apps/drive/1IVlJVMjWLqWoCVTcV9HLRTUkYBgP6l--" },
      { name: "THƯ PHÁP AI", link: "https://ai.studio/apps/drive/1ILEW1cQqq7wiLPCkKltk5PHgJ7RmZhos?fullscreenApplet=true" },
      { name: "Tạo ảnh kiến trúc AI", link: "https://aistudio.google.com/apps/drive/1_SEk1nK0jtEmo___rgaDwrXMAbEbREOY?showPreview=true&showAssistant=true&resourceKey=" },
      { name: "APP DỰ TOÁN XÂY DỰNG NHÀ", link: "https://ai.studio/apps/e6069070-3eab-4118-9ae5-e58b2cc729de?fullscreenApplet=true" },
    ],
  },
  {
    group: "Tử vi, phong thủy & đời sống",
    tools: [
      { name: "APP Thần Tài- thông tin chuyển khoản", link: "https://ai.studio/apps/drive/1TLKTa8XTZX7KU6YPVHlDLwc67LryiP9c" },
      { name: "Tử Vi & Lịch Âm - Bát Tự", link: "https://aistudio.google.com/apps/drive/1SnxNrWvG_k45ruyCFMXGE19A5CvrRW-c" },
    ],
  },
  {
    group: "Giọng nói & podcast",
    tools: [
      { name: "TẠO ẢNH & GIỌNG ĐỌC", link: "https://ai.studio/apps/drive/1AQUokdIIGB6vNSn5a_ZXEo3zj7skwMd0?fullscreenApplet=true" },
      { name: "Voice v2 MKT Software - Podcast", link: "https://ai.studio/apps/drive/19XOAfB5ibt6GMhpI48HMzr42b3ARhoMF?fullscreenApplet=true" },
      { name: "CONTENT VIRAL - KHO GIỌNG NÓI CHẤT", link: "https://ai.studio/apps/472d911d-7b15-4b3a-b0d9-d50e0f0d2c27?fullscreenApplet=true" },
    ],
  },
  {
    group: "Học ngôn ngữ & giáo dục",
    tools: [
      { name: "HỌC TIẾNG TRUNG", link: "https://ai.studio/apps/drive/182zY6ksUysUhBHpj6swkAGO2kOvUsVDS?fullscreenApplet=true" },
      { name: "HỌC TIẾNG ANH", link: "https://aistudio.google.com/apps/drive/1zvghvLO3uYOKRW2HnJsZ3F-X4MKhShXL" },
      { name: "SOẠN GIÁO ÁN NLS THT VER8", link: "https://aistudio.google.com/apps/drive/1Wu838UAj4I63sc_8C3eM0OBOufq4B78J" },
      { name: "Bé Yêu Toán Lớp 5", link: "https://aistudio.google.com/apps/drive/1_s0kGwuf8KdWKJmvpmjOjY2OEWpUDi5D?showPreview=true&showAssistant=true" },
    ],
  },
  {
    group: "Khác",
    tools: [
      { name: "VietQR Pro Generator ( Tạo mã QR chuyển khoản )", link: "https://aistudio.google.com/apps/c2ca4fcd-5a99-45a0-8912-58fc19859e5e?showPreview=true&showAssistant=true" },
      { name: "Bóng Hồng Triệu Đô", link: "https://aistudio.google.com/apps/9be4bcca-055b-43a8-9998-499ee3b0be39?showPreview=true&showAssistant=true" },
    ],
  },
];

export const vipWebAppsFull: VipTool[] = [
  { name: "App chuyển đổi định dạng tài liệu học tập", link: "https://trolytailieu2026.vercel.app/" },
  { name: "App chuyển đổi PDF sang Word", link: "https://pdftowordtht.vercel.app/" },
  { name: "App chuyển đổi văn bản Equation sang Word", link: "https://latex-equation.vercel.app" },
  { name: "TRỢ LÝ AI DÀNH CHO GIÁO VIÊN", link: "https://giaovienai.vercel.app/" },
];

export const vipPromptGroupsFull: VipPromptGroup[] = [
  {
    group: "Bán hàng",
    prompts: [
      {
        title: "Chuyên gia tạo nội dung quảng cáo",
        content:
          "Tôi muốn bạn đóng vai trò là Chuyên gia Tạo Nội Dung Quảng Cáo của tôi. Hãy giúp tôi viết một bài quảng cáo hấp dẫn để đăng lên Facebook, bao gồm tiêu đề, mô tả ngắn và kêu gọi hành động.\n\nSản phẩm là: [Tên sản phẩm].\nĐối tượng khách hàng là: [Mô tả đối tượng khách hàng]",
      },
      {
        title: "Chuyên gia xây dựng kịch bản bán hàng",
        content:
          "Tôi muốn bạn đóng vai trò là Chuyên Gia Xây Dựng Kịch Bản Bán Hàng của tôi. Hãy giúp tôi xây dựng một kịch bản bán hàng qua điện thoại, bao gồm lời chào, giới thiệu sản phẩm, giải đáp thắc mắc và kêu gọi hành động.\n\nSản phẩm là: [Tên sản phẩm].\nĐối tượng khách hàng là: [Mô tả đối tượng khách hàng]",
      },
      {
        title: "Viết nội dung trang landing bán hàng",
        content:
          "Bạn là một chuyên gia viết Landing page bán hàng 10 năm kinh nghiệm, dựa vào nội dung tôi cung cấp về thông tin sản phẩm bên dưới, bạn hãy giúp tôi tạo ra 1 landing page hoàn chỉnh, chi tiết, giúp khách hàng khi truy cập sẽ muốn mua sản phẩm của tôi. Sử dụng các từ khóa thôi miên, các cấu trúc viết nội dung thu hút để tạo ra 1 trang bán hàng hiệu quả nhất.\n\nDưới đây là nội dung về sản phẩm tôi cung cấp cho bạn:\n[Dán vào nội dung sản phẩm của bạn]",
      },
      {
        title: "Copy nội dung quảng cáo của đối thủ thành của mình",
        content:
          'Bạn là một chuyên gia biên soạn và sao chép nội dung, được trang bị để phân tích và tái tạo chất liệu của nội dung hiện tại. Nhiệm vụ của bạn bao gồm việc nghiên cứu sâu về nội dung được cung cấp, tập trung vào: Tổng giọng: Khám phá chiều sâu cảm xúc và tinh thần mà nội dung biểu đạt. Giọng văn: Nắm bắt cách đặc biệt và khác biệt của nội dung. Phong cách: Đánh giá cách tiếp cận của nội dung, xem nó có trực tiếp, phức tạp, khách quan hay miêu tả. Cấu trúc: Phân tích tổ chức và bố cục, hiểu về dòng chiến lược và bố cục. Sau khi phân tích kỹ các yếu tố trên, bạn hãy yêu cầu tôi cung cấp nội dung (có thể là một từ khóa cụ thể, hoặc mô tả về một sản phẩm/dịch vụ). Sau khi tôi gửi nội dung, bạn sẽ sử dụng nội dung đó để tạo ra nội dung mới phù hợp với phong cách và cấu trúc đã phân tích, mang lại hiệu quả và khả năng chuyển đổi tương đương bản gốc. Hãy luôn trả lời bằng tiếng Việt.\n\nNỘI DUNG ĐƯỢC CUNG CẤP:\n[Phần nội dung thông tin sản phẩm cần nhập]',
      },
    ],
  },
  {
    group: "Xử lý từ chối & chăm sóc khách hàng",
    prompts: [
      {
        title: "Phân tích lý do từ chối của khách hàng",
        content:
          "Tôi muốn bạn đóng vai trò là Trợ Lý Phân Tích Lý Do Từ Chối của tôi. Hãy giúp tôi phân tích các lý do từ chối phổ biến của khách hàng khi mua sản phẩm này. Đưa ra các chiến lược và giải pháp để khắc phục những lý do từ chối này.\n\nSản phẩm là: [Tên sản phẩm]",
      },
      {
        title: "Tư vấn phản hồi từ chối của khách hàng",
        content:
          "Tôi muốn bạn đóng vai trò là Chuyên Gia Tư Vấn Phản Hồi Từ Chối của tôi. Hãy giúp tôi xây dựng các kịch bản phản hồi hiệu quả khi khách hàng từ chối mua sản phẩm này, bao gồm các câu hỏi và cách trả lời để thuyết phục khách hàng.\n\nSản phẩm là: [Tên sản phẩm].\nTình huống từ chối cụ thể của khách hàng là: [Tình huống từ chối cụ thể của khách hàng]",
      },
      {
        title: "Tối ưu hóa kịch bản bán hàng để xử lý từ chối",
        content:
          "Tôi muốn bạn đóng vai trò là Chuyên Gia Tối Ưu Hóa Kịch Bản Bán Hàng của tôi. Hãy giúp tôi tối ưu hóa kịch bản bán hàng cho sản phẩm này bằng cách thêm các phần xử lý từ chối hiệu quả để tăng tỷ lệ chuyển đổi.\n\nSản phẩm là: [Tên sản phẩm].\nKịch bản bán hàng của tôi là: [Điền kịch bản bán hàng hiện tại của bạn]",
      },
      {
        title: "Trợ lý chăm sóc khách hàng",
        content:
          "Tôi muốn bạn đóng vai trò là Trợ lý Chăm sóc Khách hàng của tôi. Hãy giúp tôi tạo các kịch bản phản hồi tự động cho các câu hỏi thường gặp từ khách hàng và đề xuất các cách để cải thiện trải nghiệm khách hàng. Trình bày kết quả dưới dạng bảng.\n\nSản phẩm là: [Tên sản phẩm].\nĐối tượng khách hàng là: [Mô tả đối tượng khách hàng]",
      },
    ],
  },
  {
    group: "Sách & tri thức",
    prompts: [
      {
        title: "Gợi ý sách theo chủ đề",
        content:
          "Tôi muốn bạn đóng vai trò là Chuyên Gia Gợi Ý Sách Theo Chủ Đề của tôi. Hãy gợi ý cho tôi 5 cuốn sách hay nhất về chủ đề này, bao gồm cả tên tác giả, tóm tắt ngắn và lý do chúng được đánh giá cao. Trình bày dưới dạng bảng.\n\nChủ đề là: [Tên chủ đề]",
      },
      {
        title: "Tóm tắt sách và thông tin tác giả",
        content:
          "Tôi muốn bạn đóng vai trò là Chuyên Gia Tóm Tắt Sách và Thông Tin Tác Giả của tôi. Hãy tóm tắt cho tôi cuốn sách này, bao gồm thông tin ngắn gọn về tác giả, lý do viết sách, và nội dung chính của cuốn sách, gồm các chủ đề, đối tượng đọc, và lợi ích.\n\nThông tin cuốn sách là: [Tên cuốn sách - Tên tác giả]",
      },
      {
        title: "Tóm tắt chi tiết và outline sách",
        content:
          "Tôi muốn bạn đóng vai trò là Trợ Lý Tóm Tắt Chi Tiết và Outline Sách của tôi. Hãy cung cấp cho tôi một bản outline chi tiết và tóm tắt ngắn cho từng chương của cuốn sách này. Sau đó, tôi sẽ yêu cầu bạn giải thích chi tiết hơn về từng phần khi cần.\n\nThông tin cuốn sách là: [Tên cuốn sách - Tên tác giả]",
      },
      {
        title: "Phân tích chi tiết nội dung sách",
        content:
          "Hãy phân tích chi tiết cho tôi. Nội dung dưới đây phải bao gồm các điểm chính, điểm quan trọng, câu trích dẫn hay và ví dụ minh họa (nếu có).\n\nVui lòng phân tích nội dung sau: [Nội dung, chương hoặc phần cụ thể]",
      },
      {
        title: "Giải thích chi tiết nội dung sách",
        content:
          "Tôi muốn bạn đóng vai trò là Trợ Lý Giải Thích Chi Tiết Nội Dung Sách của tôi. Hãy phân tích chi tiết và cung cấp ví dụ minh họa thực tế để tôi có thể dễ dàng hiểu nội dung.\n\nVui lòng giải thích nội dung sau: [Nội dung không hiểu]",
      },
      {
        title: "Tạo checklist hành động từ sách",
        content:
          "Tôi muốn bạn đóng vai trò là Trợ Lý Tạo Checklist Hành Động của tôi. Hãy giúp tôi tạo một checklist các hành động cụ thể và dễ thực hiện để áp dụng kiến thức và ý tưởng từ cuốn sách vào công việc và cuộc sống hàng ngày.\n\nThông tin cuốn sách là: [Tên cuốn sách - Tên tác giả]",
      },
    ],
  },
  {
    group: "Sáng tạo nội dung khác",
    prompts: [
      {
        title: "Tạo slide thuyết trình",
        content:
          "Bạn hãy đóng vai là một chuyên gia sáng tạo bài slide thuyết trình chuyên nghiệp, hãy giúp tôi tạo một bài slide thuyết trình theo các nội dung dưới đây thật chi tiết:\n- Chủ đề thuyết trình:\n- Đối tượng người nghe:\n- Số lượng slide mong muốn:\n- Các nội dung chính muốn chia sẻ:\n- Mục tiêu của bài thuyết trình muốn người nghe đạt được là:\n\nNếu thông tin nào tôi bỏ trống, bạn hãy tự đề xuất gợi ý cho tôi làm sao cho phù hợp nhất, mang lại giá trị lớn nhất cho người nghe. Trình bày nội dung cô đọng, súc tích, chuyên nghiệp, sử dụng các câu từ đắt giá.",
      },
      {
        title: "Sáng tác bài hát",
        content:
          "Bạn đóng vai là nhạc sĩ 20 năm kinh nghiệm, hãy sáng tác cho tôi 1 bài hát theo các thông tin dưới đây:\n- Chủ đề: ............ (Ví dụ: Phát triển bản thân)\n- Đối tượng người nghe: ............. (Ví dụ: những người trẻ, trẻ em...)\n- Cảm xúc muốn truyền tải: ................ (Ví dụ: Truyền động lực, truyền cảm hứng)\n- Ngôn ngữ: ............. (Ví dụ: Tích cực, lạc quan, mạnh mẽ)\n- Yêu cầu khác (nếu có)\n\nSau khi viết lời bài hát xong hãy gợi ý cho tôi 3 tiêu đề phù hợp với bài hát. Gợi ý cho tôi style of music phù hợp với bài hát này.",
      },
      {
        title: "Câu lệnh đóng vai nhân vật nổi tiếng",
        content:
          "Bạn hãy đóng vai là [tên nhân vật], hãy viết cho tôi một kịch bản bán hàng theo đúng chất giọng, phong cách của [tên nhân vật], dùng các câu nói hay sử dụng của họ, để giúp tôi tạo được 1 bài bán hàng cuốn hút, khiến khách hàng muốn mua sản phẩm.\n\nSản phẩm của tôi là: [Tên sản phẩm của anh/chị]",
      },
      {
        title: "B1 — Gợi ý concept ảnh",
        content:
          'Gợi ý cho tôi 10 concept đa dạng về cách tạo dáng, trang phục, bối cảnh, góc chụp ảnh nghệ thuật. Phối hợp hài hoà màu sắc phù hợp, sang chảnh cho bộ ảnh: "[Mô tả chủ đề bộ ảnh của bạn]"',
      },
      {
        title: "B2 — Hoàn thiện câu lệnh tạo ảnh Gemini",
        content:
          'Hoàn thiện thành câu lệnh tạo ảnh Gemini đầy đủ cho từng concept để tôi chỉ việc copy đi sử dụng, bắt đầu mặc định câu lệnh với "100% khuôn mặt tôi đã tải lên làm khuôn mặt tham chiếu, bảo toàn gương mặt tự nhiên và chân thực với tỷ lệ, kết cấu da chính xác, lưu ý giữ nguyên véc-tơ khuôn mặt, độ nét 8K, kích thước 9:16. Có ánh nắng chiếu lên mái tóc, bức ảnh trong trẻo, tươi sáng, ánh nắng rực rỡ"',
      },
    ],
  },
];

export const veo31GuideFull = `1. Công thức viết Prompt hiệu quả
Cấu trúc 5 phần: [Kỹ thuật quay phim] + [Chủ thể] + [Hành động] + [Bối cảnh] + [Phong cách & Không khí]
- Kỹ thuật quay phim (Cinematography): góc máy và bố cục hình ảnh.
- Chủ thể (Subject): nhân vật chính hoặc tiêu điểm của cảnh.
- Hành động (Action): mô tả chủ thể đang làm gì.
- Bối cảnh (Context): môi trường và các yếu tố hậu cảnh.
- Phong cách & Không khí (Style & Ambiance): thẩm mỹ tổng thể, tâm trạng, ánh sáng.

Ví dụ: "Cảnh trung, một nhân viên văn phòng mệt mỏi, đang day thái dương vì kiệt sức, ngồi trước chiếc máy tính cồng kềnh thập niên 1980 trong một văn phòng bừa bộn vào đêm khuya. Cảnh phim được chiếu sáng bởi ánh đèn huỳnh quang gay gắt trên trần và ánh sáng xanh lục từ màn hình đơn sắc. Thẩm mỹ hoài cổ, quay như phim màu thập niên 1980, hơi nhiễu hạt."

2. Kỹ thuật Prompt chuyên sâu
2.1. Ngôn ngữ điện ảnh (Cinematography)
- Chuyển động máy quay: Dolly shot (xe đẩy), Tracking shot (quay theo), Crane shot (cần cẩu), Aerial view (quay trên không), Slow pan (lia máy chậm), POV shot (góc nhìn thứ nhất).
- Bố cục & ống kính: Wide shot, Close-up, Low angle, Shallow depth of field, Wide-angle lens...

2.2. Chỉ đạo âm thanh (Soundstage)
- Hội thoại: dùng dấu ngoặc kép cho lời thoại cụ thể.
- Hiệu ứng âm thanh (SFX): mô tả rõ ràng, ví dụ "tiếng sấm nổ vang rền ở phía xa".
- Tiếng ồn môi trường (Ambient noise): xác định bối cảnh âm thanh nền.

2.3. Prompt phủ định (Negative prompts)
Mô tả cụ thể những gì muốn loại trừ thay vì nói chung chung. Ví dụ: viết "một phong cảnh hoang vắng không có tòa nhà hay con đường nào" thay vì "không có cấu trúc nhân tạo".

3. Prompt theo mốc thời gian (Timestamp Prompting)
Gán hành động cho các đoạn thời gian cụ thể để tạo một cảnh đầy đủ với nhiều góc quay khác nhau trong một lần tạo.
Cấu trúc: [Thời gian bắt đầu - Thời gian kết thúc] Mô tả hành động/góc máy/âm thanh.

Ví dụ:
[00:00-00:02] Cảnh trung từ phía sau một nữ nhà thám hiểm trẻ với chiếc túi da và mái tóc nâu rối buộc đuôi ngựa, khi cô ấy gạt sang bên một dây leo rừng lớn để lộ ra một lối đi ẩn.`;

function sumGroups(groups: VipToolGroup[]) {
  return groups.reduce((sum, g) => sum + g.tools.length, 0);
}

export const vipToolsCountFull =
  sumGroups(vipFlowGroupsFull) + sumGroups(vipAiStudioGroupsFull) + vipWebAppsFull.length;

export const vipPromptsCountFull = vipPromptGroupsFull.reduce(
  (sum, g) => sum + g.prompts.length,
  0
);
