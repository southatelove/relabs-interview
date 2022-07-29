// LIBRARYS
import React from "react";

import { Table } from "antd";
import * as dayjs from "dayjs";

// STYLES
import "./PageMenuStyles.css";

function PageMenu() {
  const [dataSource, setDataSource] = React.useState([]);
  const [dataWebSocket, setDataWebSocket] = React.useState([]);

  React.useEffect(() => {
    fetchRecords();
  }, []);

  React.useEffect(() => {
    const ws = new WebSocket("wss://test.relabs.ru/event");
    ws.onmessage = (event) => {
      setDataWebSocket((prevState) => [...prevState, JSON.parse(event.data)]);
    };
    return () => {
      ws.close();
    };
  }, []);

  const columnsWebSocket = [
    {
      title: "Дата",
      dataIndex: "ctime",
      render: () => (
        <p>{dayjs(dataWebSocket.ctime).format("DD.MM.YYYY HH:mm")}</p>
      ),
      key: "name",
    },
    {
      title: "Событие",
      dataIndex: "event",
      key: "age",
    },
  ];

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
    },
    {
      title: "Имя",
      dataIndex: "name",
    },
    {
      title: "Роль",
      dataIndex: "role",
    },
    {
      title: "Дата создания",
      dataIndex: "ctime",
      render: () => <p>{dayjs(dataSource.ctime).format("DD.MM.YYYY HH:mm")}</p>,
    },

    {
      title: "Действие",
      render: (record) => {
        return (
          <>
            <button onClick={() => onDeleteString(record)}>Удалить</button>
          </>
        );
      },
    },
  ];

  const onDeleteString = (deleteEl) => {
    const newData = dataSource.filter((elem) => elem.id !== deleteEl.id);
    setDataSource(newData);
  };
  const fetchRecords = () => {
    fetch("https://test.relabs.ru/api/users/list?limit=15").then((res) => {
      res.json().then((response) => {
        setDataSource(response.items);
      });
    });
  };

  return (
    <div>
      <div className="mainMenu">
        <a href="/">Главная страница</a>
        <a href="/login">Авторизация</a>
        <a href="/mobilephones">Магазин</a>
      </div>

      <div className="mainPage">
        <div style={{ display: "flex" }}>
          <div>
            <p className="firstTableName">Список пользователей</p>
            {dataSource.length !== 0 ? (
              <Table
                dataSource={dataSource}
                columns={columns}
                pagination={{ pageSize: 5 }}
              />
            ) : (
              <p
                style={{
                  fontSize: "50px",
                  paddingLeft: "63px",
                  paddingTop: "63px",
                }}
              >
                All users are deleted
              </p>
            )}
          </div>
          <div>
            <p className="secondTableName">События</p>
            <Table
              dataSource={dataWebSocket}
              columns={columnsWebSocket}
              pagination={{ pageSize: 5 }}
              style={{ paddingRight: "63px" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageMenu;
