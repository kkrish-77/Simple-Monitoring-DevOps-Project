# Golden Roast Coffee Website Monitoring with Prometheus & Grafana

<img width="1024" height="1536" alt="Image" src="https://github.com/user-attachments/assets/b1341f5f-54c4-4aab-9401-74684cc0dd85" />

## 📊 Overview

This project provides monitoring and observability for a Node.js app using **Prometheus** for metrics collection and **Grafana** for visualization.

- Node.js app exposes metrics via `/metrics` endpoint
- Prometheus scrapes the app and any exporters (Node Exporter, etc.)
- Grafana is used to build dashboards from Prometheus data

***

## 🛠️ Prerequisites

- Node.js (for app)
- Docker & Docker Compose (recommended)
- Prometheus
- Grafana

***

## 🚀 Installation & Setup

### 1. Clone the Repo

```bash
git clone https://github.com/yourusername/golden-roast-cafe.git
cd golden-roast-cafe
```

### 2. Start Services (Recommended: Docker Compose)

Update any config paths/filenames if you renamed resources.

```bash
docker-compose up -d
```

- Node.js API: [http://localhost:8080](http://localhost:8080)
- Metrics endpoint: [http://localhost:8080/metrics](http://localhost:8080/metrics)
- Prometheus: [http://localhost:9090](http://localhost:9090)
- Grafana: [http://localhost:3000](http://localhost:3000)

***

## 🔧 Manual Installation

### 1. **Prometheus**

- [Download Prometheus](https://prometheus.io/download/)
- Edit `prometheus.yml` to configure scrape targets:
  ```yaml
  scrape_configs:
    - job_name: 'node'
      static_configs:
        - targets: ['localhost:8080'] 

  ```

### 2. **Node Exporter (Optional - for system metrics)**

- [Download Node Exporter](https://prometheus.io/download/#node_exporter)
- Start with `./node_exporter`
- Add to Prometheus:
  ```yaml
  - job_name: 'node_exporter'
    static_configs:
      - targets: ['localhost:9100']
  ```

### 3. **Grafana**

#### On Ubuntu/Debian:
```bash
sudo apt update
sudo mkdir -p /etc/apt/keyrings
wget -q -O - https://apt.grafana.com/gpg.key | gpg --dearmor | sudo tee /etc/apt/keyrings/grafana.gpg > /dev/null
echo "deb [signed-by=/etc/apt/keyrings/grafana.gpg] https://apt.grafana.com stable main" | sudo tee /etc/apt/sources.list.d/grafana.list
sudo apt update
sudo apt install grafana
sudo systemctl start grafana-server
sudo systemctl enable grafana-server
```
Login at [http://localhost:3000](http://localhost:3000) (`admin`/`admin`), change the password.

- Add Prometheus as a data source (URL: `http://localhost:9090`)

***

## 📈 Example Prometheus Queries for Grafana Panels

Add these queries in your Grafana dashboard panels:

- **Target Health:**  
  `up`

- **CPU Usage Rate:**  
  `rate(node_cpu_seconds_total{mode!="idle"}[5m])`

- **Memory Usage (MB):**  
  `node_memory_Active_bytes / 1024 / 1024`

- **Pod CPU Usage (Kubernetes):**  
  `sum(rate(container_cpu_usage_seconds_total[5m])) by (pod)`

- **HTTP Request Rate:**  
  `rate(http_requests_total[5m])`

***

## 🎯 Usage

1. Access Grafana UI, create panels using above queries.
2. Visualize your application/server health and traffic.
3. Use pre-made dashboards from community or create alerts.

***

## 📚 Resources

- [Prometheus Documentation](https://prometheus.io/docs/)
- [Grafana Documentation](https://grafana.com/docs/)
- [PromQL Cheat Sheet](https://prometheus.io/docs/prometheus/latest/querying/examples/)

***
