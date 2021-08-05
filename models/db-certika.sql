CREATE DATABASE dbcertika;
USE dbcertika;

-- Tabla de monitores
CREATE TABLE monitores(
    id INT(10) NOT NULL,
    nombre VARCHAR(30) NOT NULL,
    apellido VARCHAR(30) NOT NULL,
    programa VARCHAR(30) NOT NULL,
    semestre VARCHAR(30) NOT NULL,
    cedula INT(10) NOT NULL,
    informacion VARCHAR(30) NOT NULL
);

ALTER TABLE monitores
    ADD PRIMARY KEY (id);

ALTER TABLE monitores
MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;
DESCRIBE monitores;


-- Tabla de monitorias
CREATE TABLE monitorias(
    id INT(10) NOT NULL,
    nombre VARCHAR(30) NOT NULL,
    apellido VARCHAR(30) NOT NULL,
    materia VARCHAR(30) NOT NULL,
    monitor VARCHAR(30) NOT NULL,
    fecha timestamp NOT NULL DEFAULT current_timestamp,
    salon VARCHAR(30) NOT NULL
);

ALTER TABLE monitorias
    ADD PRIMARY KEY (id);

ALTER TABLE monitorias
MODIFY id INT(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT = 1;
