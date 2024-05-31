CREATE TABLE IF NOT EXISTS discord (
  id int(11) NOT NULL AUTO_INCREMENT,
  discord_id varchar(50) DEFAULT NULL,
  channel_id varchar(50) DEFAULT NULL,
  type varchar(50) DEFAULT NULL,
  is_finished tinyint(4) DEFAULT 0,
  created_at datetime DEFAULT current_timestamp(),
  PRIMARY KEY (id)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;