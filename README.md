
## Laravel React Tasklist

Tasklist single-page, full-stack app built with **Laravel** & **React.js** (with _Vite.js_).
For the drag & drop functionality `react-beautiful-dnd` is used.

<img src="https://i.imgur.com/uXvmuqS.gif" style="width: 100%;">



#### Resources:

- [Postman Collection](https://documenter.getpostman.com/view/1747137/2s9YsJArg7)


#### Installation:

- **Pre-requisites**:
    - PHP >= 8.1
    - Composer
    - MySQL
    - Node.js >= 18

- Clone the repository, or download the zip file and extract it.
```shell
git clone git@github.com:boolfalse/laravel-react-tasklist.git && cd laravel-react-tasklist/
```

- Copy the `.env.example` file to `.env`:
```shell
cp .env.example .env
```

- Install the dependencies.
```shell
composer install
```

- Generate the application key.
```shell
php artisan key:generate
```

- Create a MySQL database and set the database credentials in the `.env` file:
```shell
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE="<database_name>"
DB_USERNAME="<username>"
DB_PASSWORD="<password>"
```

- **_[Optional]_** To change the default seed data (projects, tasks counts) update `config/project.php` file, and optimize caches as mentioned below.

- Refresh the application cache.
```shell
php artisan optimize
```

- Run the migrations and seed the database.
```shell
php artisan migrate:fresh --seed
```

- Install the NPM dependencies.
```shell
npm install
```

- Build the assets.
```shell
npm run build
```

- **_[Optional]_** For development, run below command to watch the assets for changes.
```shell
npm run dev
```

- Start the development server using below command or configure a virtual host.
```shell
php artisan serve
```

- Open the application in a browser at [http://127.0.0.1:8000](http://127.0.0.1:8000).



#### Author:

- [BoolFalse](https://boolfalse.com/)
