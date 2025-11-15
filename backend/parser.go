package backend

import (
	"html/template"
	"log/slog"
	"strings"

	"github.com/pelletier/go-toml/v2"
)

type EntryInfo struct {
	Title        string         `toml:"title"`
	Description  string         `toml:"description"`
	Img          image          `toml:"image"`
	PubLocalDate toml.LocalDate `toml:"publication_date"`
}

func parse(b []byte, info *EntryInfo, d *data) template.HTML {
	var dd string
	splits := strings.SplitN(string(b), "---", 2)
	if len(splits) == 2 {
		if info != nil {
			err := toml.Unmarshal([]byte(splits[0]), info)
			if err != nil {
				slog.Warn("parsing entry info", "error", err)
			}
			dd = splits[1]
		} else {
			dd = splits[1]
		}
	} else {
		dd = string(b)
	}
	content := template.HTML(dd) // markdown.Parse(dd, &markdown.Option{ImageSource: getStatic})
	if info != nil {
		d.PageDescription = info.Description
		d.title = info.Title
		d.Image = info.Img.Src
	}
	return content
}
