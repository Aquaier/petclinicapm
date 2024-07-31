  <script src="https://unpkg.com/@elastic/apm-rum@5.16.1/dist/bundles/elastic-apm-rum.umd.js" crossorigin></script>
  <script>
    elasticApm.init({
      serviceName: 'my-service-name',
      serverUrl: 'http://192.168.0.109:8200',
    })
  </script>
