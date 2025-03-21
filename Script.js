body>
	<div class="weather-card">
		<div class="row justify-content-end">
			<div class="col-auto">
				<div class="sunny-icon">
					<i class="bi bi-sun-fill"></i>
				</div>
			</div>
		</div>
		<h1 class="weather-title text-center mb-4">
		Weather App</h1>
		<div class="input-group mb-3">
			<input type="text" class="form-control"
				placeholder="Enter Your City Name"
				aria-label="City Name"
				aria-describedby="basic-addon2">
			<button class="btn btn-primary weather-btn"
					type="button" id="button-addon2">Get Weather</button>
		</div>
		<div id="weatherInfo">
			<div class="weather-icon text-center">
				<i class="bi bi-cloud-sun"></i>
			</div>
			<div class="weather-info text-center">
				<p>Temperature: 20°C</p>
				<p>Weather: Sunny</p>
				<p>Humidity: 60%</p>
				<p>Wind Speed: 5 m/s</p>
				<p>Visibility: 10 km</p>
			</div>
		</div>
	</div>

	<!-- Include Bootstrap JS -->
	<script src=
"https://cdn.jsdelivr.net/npm/bootstrap
  
