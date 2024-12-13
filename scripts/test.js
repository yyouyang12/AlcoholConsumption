document.addEventListener("DOMContentLoaded", () => {
    const testDiv = document.getElementById("plot1");
    if (testDiv) {
        testDiv.innerHTML = "<h1>JS is Working!</h1>";
    }
});

document.addEventListener("DOMContentLoaded", () => {
    // 确保 DOM 已加载
    console.log("DOM Loaded, starting to fetch data...");

    // 尝试加载数据
    d3.csv("data_d3.csv").then(data => {
        console.log("Data loaded successfully:", data);

        // 如果数据为空或格式不对，可以在这里加个提示
        if (data.length === 0) {
            console.error("Data is empty. Please check the file path or content.");
        }
    }).catch(error => {
        // 捕获错误，比如路径不对或文件读取失败
        console.error("Error loading data:", error);
    });
});
