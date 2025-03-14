function downloadApp(appName) {
    // يمكنك تغيير الروابط حسب التطبيقات التي تريد تحميلها
    const appLinks = {
        'app1': 'https://example.com/download/app1',
        'app2': 'https://example.com/download/app2'
    };

    const link = appLinks[appName];
    if (link) {
        window.location.href = link;
    } else {
        alert('التطبيق غير متوفر للتحميل حالياً.');
    }
}